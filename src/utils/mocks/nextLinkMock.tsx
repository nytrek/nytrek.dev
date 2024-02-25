/**
 * @description ChatGPT generated snippet
 */
const NextLinkMock: React.FC<{
  children: React.ReactNode;
  [key: string]: any;
}> = ({ children, ...props }) => {
  return (
    <a
      {...props}
      onClick={(e) => {
        e.preventDefault();
        window.history.pushState({}, "", props.href);
      }}
    >
      {children}
    </a>
  );
};

export default NextLinkMock;
