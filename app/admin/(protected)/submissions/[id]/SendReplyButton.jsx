"use client";

export default function SendReplyButton({ action, recipient, sent }) {
  function confirmSend(event) {
    if (!window.confirm(`Send this saved response to ${recipient}?`)) {
      event.preventDefault();
    }
  }

  return (
    <button
      type="submit"
      formAction={action}
      disabled={sent}
      onClick={confirmSend}
      className="rounded-lg bg-amber-700 px-4 py-2.5 text-sm font-medium text-white hover:bg-amber-800 disabled:cursor-not-allowed disabled:bg-slate-300"
    >
      {sent ? "Reply Sent" : "Send Reply"}
    </button>
  );
}
