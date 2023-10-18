import PropTypes from "prop-types"
// Button.propTypes = {
//     onClick: PropTypes.func,
//     disabled:PropTypes.bool,
//     type:PropTypes.string,
//     children:PropTypes.JSX,
//     buttonStyle:PropTypes.string

// };
export default function Button (props) {
    return <>
    <div className="">
              <button
                className={`items-center justify-center gap-3  flex rounded-lg px-4 py-2 h-12 mt-8 ${props?.buttonStyle}`}
                onClick={props?.onClick}
                disabled={props?.disabled}
                type={props?.type}

              >
                {props.children}
              </button>
            </div>
    </>
}
