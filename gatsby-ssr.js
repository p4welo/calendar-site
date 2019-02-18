/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require("react");

exports.onRenderBody = ({ setPostBodyComponents }) => {
    return setPostBodyComponents([
      <div id="fb-root" key='123'></div>,
      <script key='234'
          src="https://connect.facebook.net/pl_PL/sdk.js#xfbml=1&version=v3.2&appId=503841366424292&autoLogAppEvents=1"
      />
    ]);
};