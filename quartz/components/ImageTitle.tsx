import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { pathToRoot } from "../util/path"

function ImageTitle({ fileData, displayClass }: QuartzComponentProps) { 
    const baseDir = pathToRoot(fileData.slug!)
    return (
        <div class={classNames(displayClass, "img-title")}>
            <a href={baseDir}>
                <img src="/static/logo.webp" height="50" width="auto"/>
            </a>
        </div>
    )
}


ImageTitle.css = `
.img-title {
  margin: 1rem 1rem 0 0; 
}
`

export default (() => ImageTitle) satisfies QuartzComponentConstructor