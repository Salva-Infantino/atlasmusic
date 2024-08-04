const Nav = () => {

    const items = ['Events', 'About', 'Sphere', 'Artists', 'Contact', 'Get Tickets'];

    const getAria = (i) => {
        return i.split(' ').join('-');
    }

    return (
        <nav className="flex justify-between fixed w-full z-10">
            {items.map((i, index) => 
            <a
                href={'#'+i}
                key={index}
                className="text-white no-underline uppercase text-base py-2 px-6 m-4 relative"
                id={'aria-'+getAria(i)}>
                    {i}
            </a>)}
        </nav>
    )
}

export default Nav;