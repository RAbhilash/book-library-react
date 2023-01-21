import "../sidenav/sidenav.scss";
import { Link } from "react-router-dom";
import useTheme from "../context/themeContext/ThemeProvider";
import collage from '/collage.webp'
import hut from '/hut.webp'
import info from '/info.webp'
import setting from '/setting.webp'
import { motion } from "framer-motion";
function sidenav() {
  const { theme } = useTheme()
  const navoptions=[{
    link:'/',
    imgsrc:hut,
    id:'home'
  },
  {
    link:'/allbooks',
    imgsrc:collage,
    id:'allbooks'
  },
  {
    link:'/settings',
    imgsrc:setting,
    id:'settings'
  },
  {
    link:'/info',
    imgsrc:info,
    id:'info'
  }
]
  return (
    <div className={"sidenav " + theme}>
      {
        navoptions.map(ele=>{
          return <Link to={ele.link}>
            <motion.div id={'sidenav-'+ele.id}
            whileHover={{scale:1.1}}
            transition={{duration:0.3}}>
              <img src={ele.imgsrc} alt="" />
            </motion.div>
          </Link>
        })
      }
    </div>
  );
}

export default sidenav;
