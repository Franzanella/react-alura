// eslint-disable-next-line linebreak-style
import React from 'react';

function ButtonLink(props) {
  // eslint-disable-next-line indent
    // props => { className: "o que alguem passar", href: ""}
  return (
    <a href={props.href} className={props.className}>
      {props.children}
    </a>
  );
}

export default ButtonLink;
