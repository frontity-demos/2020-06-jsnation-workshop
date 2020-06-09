import React from "react"
import { connect, styled } from "frontity"

const Link = ({href, actions, children}) => {
    return (
        <div>
            <Anchor
                href={href}
                onClick={e => {
                    e.preventDefault()
                    actions.router.set(href)
                }}
            >
                {children}
            </Anchor>
        </div>
    )
}

export default connect(Link)

const Anchor = styled.a`
    color: steelblue;
`