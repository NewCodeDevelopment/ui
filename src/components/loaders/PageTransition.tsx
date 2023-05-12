"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function PageTransition() {
  const router = useRouter();
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    function handleRouteChangeStart() {
      setTransition(true);
    }

    router.events.on("routeChangeStart", handleRouteChangeStart);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
    };
  }, [router, setTransition]);

  return (
    <>
      {transition && (
        <motion.div
          className="absolute left-0 top-0 bottom-0 z-50 hidden bg-red-500 lg:block lg:bg-opacity-20 lg:backdrop-blur-xl lg:backdrop-filter"
          animate={{
            width: ["0%", "100%", "100%", "0%"],
            left: ["0%", "0%", "100%", "100%"],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
          }}
          onAnimationComplete={() => setTransition(false)}
        />
      )}
    </>
  );
}
