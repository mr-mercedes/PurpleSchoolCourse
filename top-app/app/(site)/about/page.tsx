import {Metadata} from "next";
import {withLayout} from "@/layout/Layout";

export const metadata: Metadata = {
    title: 'About'
}

const About = () => {
  return (
      <div>
          About
      </div>
  )
}
export default withLayout(About);