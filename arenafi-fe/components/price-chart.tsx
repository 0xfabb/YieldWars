"use client";

import { useEffect, useRef, useMemo } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

interface PriceChartProps {
  priceHistory?: number[];
  currentPrice: number;
  className?: string;
}

export default function PriceChart({ priceHistory, currentPrice, className = "" }: PriceChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Safety check for priceHistory with useMemo to prevent unnecessary re-renders
  const safePriceHistory = useMemo(() => priceHistory || [], [priceHistory]);

  // Calculate price change
  const priceChange = safePriceHistory.length >= 2 ? 
    ((safePriceHistory[safePriceHistory.length - 1] - safePriceHistory[safePriceHistory.length - 2]) / safePriceHistory[safePriceHistory.length - 2] * 100) : 0;
  const isPositive = priceChange >= 0;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || safePriceHistory.length < 2) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size - smaller chart
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    // Clear canvas
    ctx.clearRect(0, 0, rect.width, rect.height);

    // Calculate dimensions with minimal padding
    const padding = 10;
    const chartWidth = rect.width - padding * 2;
    const chartHeight = rect.height - padding * 2;

    // Find min and max prices for scaling
    const minPrice = Math.min(...safePriceHistory);
    const maxPrice = Math.max(...safePriceHistory);
    const priceRange = maxPrice - minPrice || 1;

    // Draw price line with gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, rect.height);
    gradient.addColorStop(0, isPositive ? '#10b981' : '#ef4444');
    gradient.addColorStop(1, isPositive ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)');
    
    ctx.strokeStyle = isPositive ? '#10b981' : '#ef4444';
    ctx.lineWidth = 2;
    ctx.beginPath();

    safePriceHistory.forEach((price, index) => {
      const x = padding + (chartWidth / (safePriceHistory.length - 1)) * index;
      const y = padding + chartHeight - ((price - minPrice) / priceRange) * chartHeight;
      
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });

    ctx.stroke();

    // Fill area under the line
    ctx.lineTo(rect.width - padding, rect.height - padding);
    ctx.lineTo(padding, rect.height - padding);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    // Draw price labels at edges
    ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
    ctx.font = "10px sans-serif";
    ctx.textAlign = "right";
    
    // Max price (top right)
    ctx.fillText(
      `$${maxPrice.toFixed(2)}`,
      rect.width - padding - 2,
      padding + 12
    );
    
    // Min price (bottom right)
    ctx.fillText(
      `$${minPrice.toFixed(2)}`,
      rect.width - padding - 2,
      rect.height - padding - 2
    );

    // Current price indicator (left side, middle)
    const currentY = padding + chartHeight - ((currentPrice - minPrice) / priceRange) * chartHeight;
    ctx.textAlign = "left";
    ctx.fillStyle = isPositive ? '#10b981' : '#ef4444';
    ctx.fillText(
      `$${currentPrice.toFixed(2)}`,
      padding + 2,
      currentY - 2
    );

  }, [safePriceHistory, currentPrice, isPositive]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Big Price Display */}
      <div className="text-center space-y-2">
        <div className="text-4xl font-bold text-primary">
          {formatPrice(currentPrice)}
        </div>
        <div className={`flex items-center justify-center space-x-1 text-sm ${
          isPositive ? 'text-green-400' : 'text-red-400'
        }`}>
          {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
          <span>
            {isPositive ? '+' : ''}{priceChange.toFixed(2)}%
          </span>
        </div>
        <div className="text-xs text-muted-foreground">
          ETH/USD Live Price
        </div>
      </div>

      {/* Compact Chart */}
      <div className="relative h-24 bg-muted/20 rounded-lg overflow-hidden">
        <canvas
          ref={canvasRef}
          className="w-full h-full"
          style={{ width: "100%", height: "100%" }}
        />
        {safePriceHistory.length < 2 && (
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
            Loading price data...
          </div>
        )}
      </div>
    </div>
  );
}
