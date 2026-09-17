const EMAIL = "dreamscriptures@gmail.com";

export default function ContactEmail() {
  return <span dangerouslySetInnerHTML={{ __html: `<!--email_off-->${EMAIL}<!--/email_off-->` }} />;
}
