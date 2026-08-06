interface RatingProps {
  rating: number;
}

export function Rating({ rating }: RatingProps) {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div className="flex items-center gap-1 text-[#D8C3A5]">
      {stars.map((star) => (
        <span key={star} className={star <= Math.round(rating) ? "text-[#D8C3A5]" : "text-white/20"}>
          ★
        </span>
      ))}
      <span className="ml-2 text-xs uppercase tracking-[0.2em] text-white/50">{rating.toFixed(1)}</span>
    </div>
  );
}
