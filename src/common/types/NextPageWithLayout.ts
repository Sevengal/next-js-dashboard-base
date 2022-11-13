import {NextPage} from "next";
import {ReactElement, ReactNode} from "react";

// eslint-disable-next-line @typescript-eslint/ban-types
type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export default NextPageWithLayout;