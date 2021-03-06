import { h } from 'preact';

export const NavTitle = props => {
  return (
    <button
      className={`pl-c-nav__link pl-c-nav__link--title pl-js-acc-handle`}
      role="tab"
      {...props}
    >
      <span
        class="pl-c-nav__link-icon"
        dangerouslySetInnerHTML={{
          __html: '<pl-icon name="arrow-down"></pl-icon>',
        }}
      />
      <span className={`pl-c-nav__link-text`}>{props.children}</span>
    </button>
  );
};
