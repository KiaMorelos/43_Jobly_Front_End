import "./FlashMessage.css";
function FlashMessage({ statusCode, msg }) {
  return (
    <div className={statusCode}>
      <p>{msg}</p>
    </div>
  );
}

export default FlashMessage;
