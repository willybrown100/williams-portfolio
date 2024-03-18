function Layout({children,className}) {
 return (
   <div className={
  `w-[85vw]  bg-light ${className} m-auto dark:bg-dark max-w-[1170px]`
}>{children}</div>
 );
}
// {
//   `w-[85vw]  bg-light${className} m-auto dark:bg-dark max-w-[1170px]`;
// }
export default Layout
