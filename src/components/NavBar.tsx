import '../stylesheets/NavBar.scss';

// @ts-ignore
export function NavBar({level, children}) {
    return(
        <div className="nav-bar">
            <nav>
                <ul>
                    {children}
                </ul>
            </nav>
        </div>
    )
}
