// Generated with util/create-component.js
import React from "react";
import CardAppDownloadWidget from "./CardAppDownloadWidget";
import { Flex } from "../../components";

export default {
    title: "Widgets/CardAppDownloadWidget"
};
export const Default = () => (
   <Flex>
       <CardAppDownloadWidget
           google={"https://play.google.com/store/"}
           apple={"https://www.apple.com/es/ios/app-store/"}
       />
       <CardAppDownloadWidget
           google={"https://play.google.com/store/"}
           apple={"https://www.apple.com/es/ios/app-store/"}
       />
       <CardAppDownloadWidget
           google={"https://play.google.com/store/"}
           apple={"https://www.apple.com/es/ios/app-store/"}
       />
   </Flex>
);
