"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const defaultAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.1, staggerChildren: 0.1 } },
};

const staggerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
    scale: 1,
    y: 0,
  },
  hidden: { y: 50, scale: 0.5 },
};

const Users = ({ users }: { users: any[] }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  useEffect(() => {
    const show = () => {
      controls.start("visible");
    };
    if (isInView) {
      show();
    } else {
      controls.start("hidden");
    }
  }, [isInView]);

  return (
    <>
      <motion.div
        ref={ref}
        animate={controls}
        variants={staggerVariants}
        className="flex flex-wrap gap-4"
      >
        {users?.map((user) => {
          return (
            <motion.article
              variants={defaultAnimation}
              key={user.id}
              className=""
            >
              <h2>{user.name}</h2>
              <div>
                <label htmlFor="username" className="block">
                  User name: <span>{user.username}</span>
                </label>
                <label htmlFor="email" className="block">
                  Email: <span>{user.email}</span>
                </label>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
      ;{JSON.stringify(users)}
    </>
  );
};

export default Users;
