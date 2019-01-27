/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import './src/styles/bootstrap.css';
import './src/styles/core.css';
import './src/styles/components.css';
import './src/styles/colors.css';

export const onServiceWorkerUpdateFound = () => {
  const answer = window.confirm(
      `This application has been updated. ` +
      `Reload to display the latest version?`
  );

  if (answer === true) {
    window.location.reload()
  }
};