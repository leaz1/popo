import {Link} from "react-router-dom";

import '../stylesheets/WorkSnapshot.scss';

// @ts-ignore
export function WorkSnapshot({workName, workId}) {
    return (
        <div className="work-snapshot">
            <Link to={`/work/${workId}`}>
                <div className="tag-snapshot-details">
                    <span>{workName}</span><span>{workId}</span>
                </div>
            </Link>
        </div>
    )
}
