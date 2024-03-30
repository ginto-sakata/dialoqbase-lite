import React from "react"

export const TogtherIcon = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>((props, ref) => {
  return (
    <svg
      fill="currentColor"
      fillRule="evenodd"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 107 21"
      ref={ref}
      {...props}>
      <path
        fill="currentColor"
        d="M3.073 6.137H.997V4.445h2.076V1.218h1.85v3.227h2.91v1.692h-2.91v6.79c0 .482.09.828.27 1.038.196.196.527.294.993.294h2.008v1.692h-2.12c-1.084 0-1.858-.24-2.324-.722-.452-.481-.677-1.241-.677-2.279V6.137zM14.155 16.086c-1.113 0-2.106-.248-2.978-.744a5.23 5.23 0 01-2.008-2.076c-.482-.887-.722-1.91-.722-3.068 0-1.158.24-2.181.722-3.069a5.23 5.23 0 012.008-2.075c.872-.497 1.865-.745 2.978-.745 1.113 0 2.098.248 2.955.745a5.185 5.185 0 012.03 2.075c.482.888.723 1.91.723 3.069 0 1.158-.241 2.18-.722 3.068a5.185 5.185 0 01-2.03 2.076c-.858.496-1.843.744-2.956.744zm0-1.647c.752 0 1.414-.18 1.985-.541a3.571 3.571 0 001.354-1.512c.316-.647.474-1.376.474-2.188 0-.813-.158-1.542-.474-2.189a3.571 3.571 0 00-1.354-1.511c-.572-.361-1.233-.542-1.985-.542s-1.422.18-2.008.542a3.622 3.622 0 00-1.331 1.511c-.316.647-.474 1.376-.474 2.189 0 .812.158 1.541.474 2.188.316.647.76 1.15 1.33 1.512.587.36 1.257.541 2.009.541zM32.533 4.445v10.942c0 3.474-1.903 5.211-5.708 5.211-1.49 0-2.708-.338-3.655-1.015-.933-.677-1.474-1.64-1.625-2.888h1.896c.15.722.534 1.279 1.15 1.67.617.39 1.406.586 2.37.586 2.48 0 3.722-1.21 3.722-3.632v-1.354c-.828 1.414-2.144 2.121-3.948 2.121-1.068 0-2.023-.233-2.866-.7-.827-.465-1.481-1.142-1.963-2.03-.466-.887-.699-1.94-.699-3.158 0-1.158.233-2.181.7-3.069a5.276 5.276 0 011.985-2.075c.842-.497 1.79-.745 2.843-.745.932 0 1.73.188 2.391.564.662.361 1.18.88 1.557 1.557l.248-1.985h1.602zm-5.618 9.994c.737 0 1.391-.173 1.963-.519a3.602 3.602 0 001.354-1.489c.315-.646.473-1.376.473-2.188 0-.827-.158-1.564-.473-2.211a3.545 3.545 0 00-1.354-1.534c-.572-.361-1.226-.542-1.963-.542-1.143 0-2.068.399-2.775 1.196-.692.782-1.038 1.797-1.038 3.046 0 1.248.346 2.27 1.038 3.068.707.782 1.632 1.173 2.775 1.173zM34.276 10.198c0-1.174.225-2.204.677-3.091.466-.888 1.113-1.572 1.94-2.053.827-.497 1.775-.745 2.843-.745 1.052 0 1.985.218 2.797.654a4.746 4.746 0 011.918 1.896c.466.827.714 1.797.744 2.91 0 .165-.015.429-.045.79h-8.934v.158c.03 1.128.376 2.03 1.038 2.707s1.527 1.015 2.594 1.015c.828 0 1.527-.203 2.099-.609.586-.421.977-1 1.173-1.737h1.872c-.225 1.173-.79 2.136-1.692 2.888-.902.737-2.008 1.105-3.316 1.105-1.143 0-2.144-.24-3-.722a5.23 5.23 0 01-2.009-2.075c-.466-.903-.7-1.933-.7-3.091zm9.002-1.174c-.09-.977-.46-1.737-1.106-2.278-.631-.542-1.436-.812-2.414-.812-.872 0-1.64.285-2.301.857-.662.571-1.038 1.316-1.128 2.233h6.949zM47.57 6.137h-2.075V4.445h2.075V1.218h1.85v3.227h2.91v1.692h-2.91v6.79c0 .482.09.828.271 1.038.196.196.526.294.993.294h2.008v1.692H50.57c-1.083 0-1.858-.24-2.324-.722-.451-.481-.677-1.241-.677-2.279V6.137zM59.277 4.31c1.399 0 2.527.42 3.384 1.263.858.842 1.286 2.165 1.286 3.97v6.408h-1.85V9.656c0-1.188-.27-2.09-.812-2.707C60.744 6.317 59.97 6 58.961 6c-1.068 0-1.917.376-2.55 1.128-.616.752-.924 1.775-.924 3.069v5.753h-1.85V.158h1.85V6.34a4.48 4.48 0 011.489-1.467c.632-.376 1.399-.564 2.301-.564zM65.528 10.198c0-1.174.226-2.204.677-3.091.466-.888 1.113-1.572 1.94-2.053.828-.497 1.775-.745 2.843-.745 1.053 0 1.986.218 2.798.654a4.746 4.746 0 011.918 1.896c.466.827.714 1.797.744 2.91 0 .165-.015.429-.045.79h-8.934v.158c.03 1.128.376 2.03 1.037 2.707.662.677 1.527 1.015 2.595 1.015.827 0 1.527-.203 2.098-.609.587-.421.978-1 1.173-1.737h1.873c-.226 1.173-.79 2.136-1.692 2.888-.903.737-2.008 1.105-3.317 1.105-1.143 0-2.143-.24-3-.722a5.23 5.23 0 01-2.008-2.075c-.466-.903-.7-1.933-.7-3.091zm9.002-1.174c-.09-.977-.459-1.737-1.105-2.278-.632-.542-1.437-.812-2.414-.812-.873 0-1.64.285-2.301.857-.662.571-1.038 1.316-1.129 2.233h6.95zM84.031 4.445v1.804h-.925c-1.098 0-1.887.369-2.369 1.106-.466.737-.699 1.647-.699 2.73v5.866h-1.85V4.445h1.602l.248 1.737c.33-.527.76-.948 1.286-1.264.526-.316 1.256-.473 2.189-.473h.518zM102.875 14.259v1.692h-1.016c-.737 0-1.263-.15-1.579-.452-.316-.3-.481-.744-.496-1.33-.888 1.278-2.174 1.917-3.858 1.917-1.279 0-2.309-.3-3.091-.902-.767-.602-1.15-1.422-1.15-2.46 0-1.158.39-2.045 1.172-2.662.798-.616 1.948-.925 3.452-.925h3.385v-.79c0-.751-.256-1.338-.767-1.76-.497-.42-1.196-.63-2.099-.63-.797 0-1.459.18-1.985.54a2.16 2.16 0 00-.948 1.4h-1.85c.136-1.129.632-2.009 1.49-2.64.872-.632 2-.948 3.383-.948 1.474 0 2.61.361 3.407 1.083.812.707 1.219 1.73 1.219 3.068v4.964c0 .556.255.835.767.835h.564zm-3.181-3.565h-3.565c-1.715 0-2.572.64-2.572 1.918 0 .571.225 1.03.677 1.376.451.346 1.06.519 1.827.519 1.128 0 2.016-.293 2.662-.88.647-.602.97-1.391.97-2.369v-.564zM104.851 0c.346 0 .632.113.857.338.226.226.339.512.339.858s-.113.631-.339.857a1.16 1.16 0 01-.857.338 1.16 1.16 0 01-.857-.338 1.16 1.16 0 01-.339-.857c0-.346.113-.632.339-.858a1.16 1.16 0 01.857-.338zm-.925 4.445h1.85V15.95h-1.85V4.445z"></path>
      <path
        fill="#0F6FFF"
        d="M88.067 14.199c0 .967-.794 1.752-1.773 1.752-.98 0-1.773-.785-1.773-1.752 0-.968.793-1.752 1.773-1.752.98 0 1.773.784 1.773 1.752z"></path>
    </svg>
  )
})
