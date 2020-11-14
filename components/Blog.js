import {DiscussionEmbed} from "disqus-react"

const DisqusComments = () => {
  const disqusShortname = "antoniaeclark-com"
  const disqusConfig = {
    url: "https://antoniaeclark.com/",
  };
  return (
    <div>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}

export default DisqusComments;
