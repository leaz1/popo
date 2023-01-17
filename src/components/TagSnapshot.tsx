import {Link} from "react-router-dom";

import '../stylesheets/TagSnapshot.scss';

// @ts-ignore
export function TagSnapshot({tagName, tagId}) {
    return (
        <div className="tag-snapshot">
            <Link to={`/tag/${tagId}`}>
                <div className="tag-snapshot-details">
                    <span>{tagName}</span><span>{tagId}</span>
                </div>
            </Link>
        </div>
    )
}
