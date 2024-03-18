function Layout({children,className}) {
 return <div className={`w-full h-full z-0 bg-light${className} dark:bg-dark lg:p-16 md-12 sm:8 xl:24 p-32`}>{children}</div>;
}

export default Layout
