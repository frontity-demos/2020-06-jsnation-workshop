import React from "react";
import { connect, Global, css, styled, Head } from "frontity"
import Link from "./link"
import List from "./list"
import Post from "./post"
import Page from "./page"

const Root = ({ state, actions }) => {

  const data = state.source.get(state.router.link)

  return (
    <>
      <Head>
        <title>Frontity Workshop at JS Nation</title>
        <meta name="description" content="An introduction to creating a theme with Frontity" />
      </Head>
      <Global styles={css`
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
        html {
            font-family: sans-serif;
        }
      `} />
      <Header isPostType={data.isPostType} isPage={data.isPage}>
        <HeaderContent>
            <h1>Frontity Workshop</h1>
            <p>Current URL: {state.router.link}</p>
            {state.theme.isMenuOpen ? (
                <>
                    <Button onClick={actions.theme.closeMenu}>Close</Button>
                    <Menu>
                        <Link href="/">Home</Link>
                        <Link href="/page/2">More posts</Link>
                        <Link href="/lorem-ipsum">Lorem Ipsum</Link>
                    </Menu>
                </>
            ) : (
                <Button onClick={actions.theme.openMenu}>Menu</Button>
            )
            }
        </HeaderContent>
      </Header>
      <Main>
        {data.isArchive && <List />}
        {data.isPost && <Post />}
        {data.isPage && <Page />}
      </Main>
    </>
  );
};

export default connect(Root)

const Header = styled.header`
    background-color: #eee;
    border-width: 0 0 8px 0;
    border-style: solid;
    border-color: ${ props => props.isPostType ? props.isPage ? 'lightsteelblue' : 'lightseagreen' : 'maroon'};
`
const HeaderContent = styled.div`
    max-width: 800px;
    padding: 2em 1em;
    margin: auto;
`
const Button = styled.button`
    width: 92px;
    margin: 1em 0 0;
    padding: 0.5em;
    background: white;
    border: 1px solid #aaa;
    color: #888;
`
const Menu = styled.nav`
    display: flex;
    flex-direction: row;
    margin-top: 1em;
    & > div { // targets DIRECT children
        margin-right: 1em;
    }
`
const Main = styled.main`
    max-width: 800px;
    padding: 1em;
    margin: auto;

    img {
        max-width: 100%;
    }
    h2 {
        margin: 0.5em 0;
    }
    p {
        line-height: 1.25em;
        margin-bottom: 0.75em;
    }
`
