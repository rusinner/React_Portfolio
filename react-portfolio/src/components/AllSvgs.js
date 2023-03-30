// create svg as react component

export const PowerBtn = (props) => {
  return (
    <svg width={60} height={60} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fill="none" d="M0 0h50v50H0z" />
      <path
        d="M25 14.1c-.266 0-.533.102-.737.306l-9.336 9.337c-.204.204-.307.47-.307.736 0 .267.018.4.307.4h2.43v9.838c0 .615.494 1.11 1.11 1.11h3.4a.91.91 0 0 0 .912-.912v-3.519c0-.592.476-1.068 1.068-1.068h2.306c.592 0 1.068.476 1.068 1.068v3.519a.91.91 0 0 0 .912.912h3.4c.616 0 1.111-.495 1.111-1.11V24.88h2.43c.288 0 .306-.134.306-.4 0-.267-.103-.533-.307-.737l-9.336-9.337A1.039 1.039 0 0 0 25 14.1z"
        fill="#555"
      />
    </svg>
  );
};

export const Github = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={28}
      height={28}
      {...props}
    >
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm0 2c4.41 0 8 3.59 8 8 0 .469-.047.93-.125 1.375a4.966 4.966 0 0 0-1.031-.125c-.313-.004-.703.047-1.032.094.114-.348.188-.73.188-1.125 0-.961-.469-1.856-1.219-2.594.207-.77.41-2.09-.125-2.625-1.582 0-2.457 1.129-2.5 1.188A6.497 6.497 0 0 0 12.625 8c-.691 0-1.352.125-1.969.313l.188-.157s-.88-1.219-2.5-1.219c-.567.57-.309 2.016-.094 2.75C7.484 10.418 7 11.281 7 12.22c0 .328.078.64.156.937-.277-.031-1.277-.125-1.687-.125-.364 0-.926.086-1.375.188A7.853 7.853 0 0 1 4 12c0-4.41 3.59-8 8-8Zm-6.531 9.281c.394 0 1.593.14 1.75.156.02.055.039.106.062.157-.43-.04-1.261-.098-1.812-.031-.367.042-.836.175-1.25.28-.032-.124-.07-.245-.094-.374.438-.094 1.012-.188 1.344-.188Zm13.375.219c.398.004.761.07 1 .125-.012.066-.047.121-.063.188a5.765 5.765 0 0 0-1.156-.157c-.234-.004-.61.008-.938.031.016-.03.02-.062.032-.093.34-.047.773-.098 1.125-.094Zm-12.75.281c.562.004 1.09.043 1.312.063.524.976 1.582 1.699 3.219 2a3.192 3.192 0 0 0-1.031.906 8.77 8.77 0 0 1-.719.031c-.695 0-1.129-.62-1.5-1.156C7 15.09 6.539 15.031 6.281 15c-.261-.031-.351.117-.218.219.761.586 1.035 1.281 1.343 1.906.278.563.86.875 1.5.875h.125c-.02.11-.031.21-.031.313v1.093a7.993 7.993 0 0 1-4.719-5.343c.41-.102.871-.208 1.219-.25.16-.02.363-.036.594-.032Zm12.531.125c.45.012.848.098 1.094.156A7.983 7.983 0 0 1 16 18.907v-.593c0-.852-.672-1.946-1.625-2.47 1.582-.288 2.613-.98 3.156-1.905a12.4 12.4 0 0 1 1.094-.032ZM12.5 18c.273 0 .5.227.5.5v1.438A7.68 7.68 0 0 1 12 20v-1.5c0-.273.227-.5.5-.5Zm-2 1c.273 0 .5.227.5.5v.438a8.516 8.516 0 0 1-1-.188v-.25c0-.273.227-.5.5-.5Zm4 0c.242 0 .453.176.5.406a7.942 7.942 0 0 1-1 .344v-.25c0-.273.227-.5.5-.5Z" />
    </svg>
  );
};

export const Instagram = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={28}
      height={28}
      {...props}
    >
      <path d="M8 3a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5H8zm10 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-6 2a5 5 0 1 1-.001 10.001A5 5 0 0 1 12 7zm0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
    </svg>
  );
};

export const Facebook = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={28}
      height={28}
      {...props}
    >
      <path d="M11.666 2.005c-5.046.165-9.292 4.246-9.641 9.283-.369 5.329 3.442 9.832 8.481 10.589V14.65H8.892a1.314 1.314 0 1 1 0-2.628h1.613v-1.749c0-2.896 1.411-4.167 3.818-4.167.357 0 .662.008.921.021a1.193 1.193 0 0 1 1.129 1.198 1.2 1.2 0 0 1-1.2 1.2h-.442c-1.022 0-1.379.969-1.379 2.061v1.437h1.87a.964.964 0 0 1 .953 1.111l-.108.701a.964.964 0 0 1-.953.817h-1.762v7.247C18.235 21.236 22 17.062 22 12c0-5.634-4.659-10.179-10.334-9.995z" />
    </svg>
  );
};

export const LinkedIn = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 3333 3333"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    imageRendering="optimizeQuality"
    fillRule="evenodd"
    clipRule="evenodd"
    {...props}
  >
    <path d="M1667 0c920 0 1667 746 1667 1667 0 920-746 1667-1667 1667C747 3334 0 2588 0 1667 0 747 746 0 1667 0zm-215 1336h342v175h5c48-86 164-175 338-175 361 0 428 225 428 517v596h-357v-528c0-126-3-288-186-288-186 0-214 137-214 279v537h-357V1336zm-247-309c0 102-83 186-186 186-102 0-186-83-186-186 0-102 83-186 186-186 102 0 186 83 186 186zm-371 309h371v1113H834V1336z" />
  </svg>
);

export default LinkedIn;

export const YouTube = (props) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fab"
      data-icon="youtube"
      className="prefix__svg-inline--fa prefix__fa-youtube prefix__fa-w-18"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      {...props}
    >
      <path
        fill={props.fill}
        d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
      />
    </svg>
  );
};

export const Logo = (props) => {
  return (
    <svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x={0}
      y={0}
      viewBox="0 0 318.9 273.9"
      xmlSpace="preserve"
      {...props}
    >
      <style>
        {
          "@keyframes oDbdMYEe_draw{to{stroke-dashoffset:0}}@keyframes oDbdMYEe_fade{0%,95.1219512195122%{stroke-opacity:1}to{stroke-opacity:0}}.st0{fill:none;stroke:#f400a5;stroke-miterlimit:10}"
        }
      </style>
      <path
        className="st0"
        d="M109.8 185.8h99.5l-49.8 86.1Z"
        style={{
          strokeDasharray: "299 301",
          strokeDashoffset: 300,
          animation: "oDbdMYEe_draw 2666ms linear 0ms forwards",
        }}
      />
      <path
        className="st0"
        d="m208.4 186.3-48.9 84.6-48.9-84.6h97.8m1.7-1H108.9l50.6 87.6 50.6-87.6z"
        style={{
          strokeDasharray: "597 599",
          strokeDashoffset: 598,
          animation: "oDbdMYEe_draw 2666ms linear 88ms forwards",
        }}
      />
      <path
        className="st0"
        d="m109.7 181.4 49.8-86.2 49.7 86.2Z"
        style={{
          strokeDasharray: "299 301",
          strokeDashoffset: 300,
          animation: "oDbdMYEe_draw 2666ms linear 177ms forwards",
        }}
      />
      <path
        className="st0"
        d="m159.5 96.2 48.9 84.6h-97.8l48.9-84.6m0-2-50.6 87.6h101.2l-50.6-87.6z"
        style={{
          strokeDasharray: "597 599",
          strokeDashoffset: 598,
          animation: "oDbdMYEe_draw 2666ms linear 266ms forwards",
        }}
      />
      <path
        className="st0"
        d="M55.7 94h99.5l-49.7 86.1Z"
        style={{
          strokeDasharray: "299 301",
          strokeDashoffset: 300,
          animation: "oDbdMYEe_draw 2666ms linear 355ms forwards",
        }}
      />
      <path
        className="st0"
        d="m154.3 94.5-48.8 84.6-48.9-84.6h97.7m1.8-1H54.9l50.7 87.6 50.5-87.6z"
        style={{
          strokeDasharray: "597 599",
          strokeDashoffset: 598,
          animation: "oDbdMYEe_draw 2666ms linear 444ms forwards",
        }}
      />
      <path
        className="st0"
        d="M164.7 94h99.5l-49.7 86.1Z"
        style={{
          strokeDasharray: "299 301",
          strokeDashoffset: 300,
          animation: "oDbdMYEe_draw 2666ms linear 533ms forwards",
        }}
      />
      <path
        className="st0"
        d="m263.3 94.5-48.8 84.6-48.9-84.6h97.7m1.8-1H163.9l50.6 87.6 50.6-87.6z"
        style={{
          strokeDasharray: "597 599",
          strokeDashoffset: 598,
          animation: "oDbdMYEe_draw 2666ms linear 622ms forwards",
        }}
      />
      <path
        className="st0"
        d="M1.7 1h99.5L51.5 87.2Z"
        style={{
          strokeDasharray: "299 301",
          strokeDashoffset: 300,
          animation: "oDbdMYEe_draw 2666ms linear 711ms forwards",
        }}
      />
      <path
        className="st0"
        d="M100.3 1.5 51.5 86.2 2.6 1.5h97.7m1.8-1H.9l50.7 87.7L102.1.5z"
        style={{
          strokeDasharray: "597 599",
          strokeDashoffset: 598,
          animation: "oDbdMYEe_draw 2666ms linear 800ms forwards",
        }}
      />
      <path
        className="st0"
        d="M217.7 1h99.5l-49.7 86.2Z"
        style={{
          strokeDasharray: "299 301",
          strokeDashoffset: 300,
          animation: "oDbdMYEe_draw 2666ms linear 888ms forwards",
        }}
      />
      <path
        className="st0"
        d="m316.3 1.5-48.8 84.7-48.9-84.7h97.7m1.8-1H216.9l50.6 87.7L318.1.5z"
        style={{
          strokeDasharray: "597 599",
          strokeDashoffset: 598,
          animation: "oDbdMYEe_draw 2666ms linear 977ms forwards",
        }}
      />
      <path
        className="st0"
        d="m55.7 89.4 49.8-86.2 49.7 86.2Z"
        style={{
          strokeDasharray: "299 301",
          strokeDashoffset: 300,
          animation: "oDbdMYEe_draw 2666ms linear 1066ms forwards",
        }}
      />
      <path
        className="st0"
        d="m105.5 4.2 48.9 84.6H56.6l48.9-84.6m0-2L54.9 89.9h101.2L105.5 2.2z"
        style={{
          strokeDasharray: "597 599",
          strokeDashoffset: 598,
          animation: "oDbdMYEe_draw 2666ms linear 1155ms forwards",
        }}
      />
      <path
        className="st0"
        d="m164.7 89.4 49.8-86.2 49.7 86.2Z"
        style={{
          strokeDasharray: "299 301",
          strokeDashoffset: 300,
          animation: "oDbdMYEe_draw 2666ms linear 1244ms forwards",
        }}
      />
      <path
        className="st0"
        d="m214.5 4.2 48.9 84.6h-97.8l48.9-84.6m0-2-50.6 87.6h101.2L214.5 2.2z"
        style={{
          strokeDasharray: "597 599",
          strokeDashoffset: 598,
          animation: "oDbdMYEe_draw 2666ms linear 1333ms forwards",
        }}
      />
    </svg>
  );
};

export const Anchor = (props) => {
  return (
    <svg
      width={800}
      height={800}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{"ic_fluent_rocket_24_regular"}</title>
      <path
        d="M8.632 19.28a.75.75 0 0 1 .073.977l-.073.084L7.574 21.4a.75.75 0 0 1-1.134-.977l.073-.084 1.059-1.058a.75.75 0 0 1 1.06 0ZM6.69 17.334a.75.75 0 0 1 .072.976l-.072.085-2.475 2.474a.75.75 0 0 1-1.133-.976l.072-.084 2.475-2.475a.75.75 0 0 1 1.06 0ZM18.778 2.232l.258.075.662.205a2.75 2.75 0 0 1 1.747 1.628l.064.182.206.665a6.75 6.75 0 0 1-1.487 6.583l-.186.193-.998.998a3.498 3.498 0 0 1-.183 4.415l-.145.152-1.242 1.243a.75.75 0 0 1-.977.073l-.084-.073-1.59-1.59-.176.177a1.75 1.75 0 0 1-2.35.114l-.125-.114-.497-.497-.798 1.395a.75.75 0 0 1-1.093.233l-.088-.075-3.89-3.89a.75.75 0 0 1 .076-1.126l.083-.055 1.396-.796-.496-.495a1.75 1.75 0 0 1-.113-2.35l.113-.125.18-.18-1.59-1.591a.75.75 0 0 1-.073-.977l.072-.084 1.243-1.242a3.498 3.498 0 0 1 4.402-.445l.167.118.996-.996a6.75 6.75 0 0 1 6.516-1.748ZM4.745 15.39a.75.75 0 0 1 0 1.061l-1.06 1.06a.75.75 0 0 1-1.061-1.06l1.06-1.06a.75.75 0 0 1 1.061 0Zm13.22-1.548-2.08 2.08 1.059 1.06.712-.713c.658-.658.76-1.661.308-2.427Zm-9.505-.394-.898.512 2.5 2.5.514-.897-2.116-2.115Zm5.038-8.574-.175.168-5.397 5.396a.25.25 0 0 0-.04.3l.04.054 5.307 5.307a.25.25 0 0 0 .3.04l.053-.04 5.395-5.396a5.25 5.25 0 0 0 1.368-5.036l-.066-.234-.207-.664a1.25 1.25 0 0 0-.695-.776l-.128-.047-.662-.206a5.25 5.25 0 0 0-5.093 1.134Zm3.095 2.558a2.5 2.5 0 1 1-3.536 3.536 2.5 2.5 0 0 1 3.536-3.536Zm-2.475 1.06a1 1 0 1 0 1.414 1.415 1 1 0 0 0-1.414-1.414ZM7.885 6.248l-.128.117-.712.712 1.06 1.06 2.081-2.08a1.998 1.998 0 0 0-2.301.19Z"
        fill="#a80071"
        fillRule="nonzero"
      />
    </svg>
  );
};

export const Link = (props) => {
  return (
    <svg
      width={800}
      height={800}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{"ic_fluent_divider_tall_24_regular"}</title>
      <path
        d="M11.25 2.75v18.5a.75.75 0 1 0 1.5 0V2.75a.75.75 0 1 0-1.5 0Z"
        fill="#a80071"
        fillRule="nonzero"
      />
    </svg>
  );
};

export const Design = (props) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="palette"
      className="prefix__svg-inline--fa prefix__fa-palette prefix__fa-w-16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill={props.fill}
        d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
      />
    </svg>
  );
};

export const Develope = (props) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="laptop-code"
      className="prefix__svg-inline--fa prefix__fa-laptop-code prefix__fa-w-20"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
      {...props}
    >
      <path
        fill={props.fill}
        d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"
      />
    </svg>
  );
};
