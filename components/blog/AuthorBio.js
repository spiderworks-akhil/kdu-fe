export default function AuthorBio({ author }) {
  return (
    <div className="bg-section-bg rounded-xl p-6 md:p-8 flex flex-col sm:flex-row gap-5 items-start">
      <img
        src={author.avatar}
        alt={author.name}
        className="w-16 h-16 rounded-full object-cover shrink-0"
      />
      <div>
        <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-1">
          About the Author
        </p>
        <h4 className="text-primary font-bold text-lg">{author.name}</h4>
        <p className="text-text-gray text-sm mb-2">{author.role}</p>
        <p className="text-text-gray text-sm leading-relaxed">{author.bio}</p>
      </div>
    </div>
  );
}
