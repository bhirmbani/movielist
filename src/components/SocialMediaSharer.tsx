import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "next-share";

const SocialMediaSharer = () => {
  const constants = {
    primary: "Amazing new website to search movies!",
    secondary: "Check this out!",
    url: typeof window !== "undefined" ? window.location.href : '',
  };
  return (
    <div>
      <EmailShareButton
        url={constants.url}
        subject={constants.primary}
        body={constants.secondary}
      >
        <EmailIcon size={32} round />
      </EmailShareButton>
      <FacebookShareButton url={constants.primary} quote={constants.primary}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <LinkedinShareButton url={constants.url}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <TelegramShareButton url={constants.url} title={constants.primary}>
        <TelegramIcon size={32} round />
      </TelegramShareButton>
      <TwitterShareButton url={constants.url} title={constants.primary}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <WhatsappShareButton
        url={constants.url}
        title={constants.primary}
        separator=":: "
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
  );
};

export default SocialMediaSharer;
