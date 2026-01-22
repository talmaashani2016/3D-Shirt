import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import { CustomButton } from "../components";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="./threejs.png"
              alt="logo"
              className="w-30 h-12 object-contain"
            />
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                {" "}
                Design Masters <br className="xl:block hidden" />
                Competition 🏆
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className=" max-w-md font-normal text-gray-600 text-base">
                Unleash your creativity with OQBI’s brand-new 3D Shirt
                Customization Tool and bring your vision to life in a{" "}
                <strong>fully immersive design experience</strong> and define
                your own style.
              </p>

              <CustomButton
                type="filled"
                title="Customize It"
                handleClick={() => (state.intro = false)}
                customStyles="w-fit px-4 py-1.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
