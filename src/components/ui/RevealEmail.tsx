import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function RevealEmail() {
  const [revealed, setRevealed] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [copied, setCopied] = useState(false);

  const email = "sjmwatsefu@gmail.com";

  const handleClick = () => {
    setPressed(true);

    // delay so the "pressed" animation is visible
    setTimeout(() => {
      setRevealed(true);
      setPressed(false); // optional reset
    }, 700);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500); // reset feedback
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <div className="text-white">
      {!revealed ? (
        <div className="flex items-center gap-2">
          <span>Press</span>
          <button
            onClick={handleClick}
            className="relative flex items-center justify-center w-10 h-10 transition-transform active:scale-95"
          >
            {/* Background SVG changes depending on pressed state */}
            <img
              src={pressed ? "/keydown.svg" : "/key.svg"}
              alt="Key"
              className="absolute inset-0 w-full h-full transition-all duration-500"
            />
           
          </button>
          <span>to reveal email</span>
          <span className="ml-3 blur-sm select-none">{email}</span>
        </div>
      ) : (
        <div className="flex items-center gap-2 group">
          {/* Mailto link */}
          <a
            href={`mailto:${email}`}
            className="text-xl font-semibold transition-opacity duration-700 ease-in-out hover:underline"
          >
            {email}
          </a>

          {/* Copy button (hidden until hover) */}
          <button
            onClick={handleCopy}
            className="p-1 rounded-md hover:bg-gray-700 transition opacity-0 group-hover:opacity-100"
            title="Copy email"
          >
            {copied ? (
              <Check className="w-5 h-5 text-green-400" />
            ) : (
              <Copy className="w-5 h-5" />
            )}
          </button>
        </div>
      )}
    </div>
  );
}
