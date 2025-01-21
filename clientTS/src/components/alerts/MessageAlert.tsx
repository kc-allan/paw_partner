interface MessageAlertProps {
  message: string;
  type: string;
  onClose?: () => void;
}

const MessageAlert = ({ message, type, onClose }: MessageAlertProps) => {
  return (
    <div
      className={`fixed top-10 right-1/2 z-1000 bg-${type}-200 rounded-md z-50`}
    >
      <div
        className={`bg-${type}-100 text-${type}-700 px-4 py-3 rounded relative`}
        role="alert"
      >
        <strong className="font-bold">{type}!</strong>
        <span className="block sm:inline">{message}</span>
        {onClose && (
          <span
            className="absolute top-0 bottom-0 right-0 px-4 py-3"
            onClick={onClose}
          >
            <svg
              className={`fill-current h-6 w-6 text-${type}-500`}
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.95 5.05a.75.75 0 0 1 1.06 1.06L11.06 10l4.95 4.95a.75.75 0 0 1-1.06 1.06L10 11.06l-4.95 4.95a.75.75 0 0 1-1.06-1.06L8.94 10 4.05 5.05a.75.75 0 0 1 1.06-1.06L10 8.94l4.95-4.95z"
              />
            </svg>
          </span>
        )}
      </div>
    </div>
  );
};

export default MessageAlert;
