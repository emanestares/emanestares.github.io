const Button = ({ name, isBeam = false, containerClass, url }) => {
  const inner = (
    <button className={`btn ${containerClass || ''} flex items-center gap-2`}>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping" />
          <span className="btn-ping_dot" />
        </span>
      )}
      {name}
    </button>
  );

  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className="w-fit">
        {inner}
      </a>
    );
  }

  return inner;
};

export default Button;
