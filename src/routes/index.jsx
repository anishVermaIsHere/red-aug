import { Suspense } from "react";
import Spinner from "../components/common/Spinner";
import { AppLayoutPage, BlogPage, HomePage, PageNotFound, PricingPage, ServicesPage } from "./LazyComponents";

const appRoutes = [
  {
    element:<AppLayoutPage />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Spinner />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "/services",
        element: (
          <Suspense fallback={<Spinner />}>
            <ServicesPage />
          </Suspense>
        ),
      },
      {
        path: "/blogs",
        element: (
          <Suspense fallback={<Spinner />}>
            <BlogPage />
          </Suspense>
        ),
      },
      {
        path: "/pricing",
        element: (
          <Suspense fallback={<Spinner />}>
            <PricingPage />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<Spinner />}>
            <PageNotFound />
          </Suspense>
        ),
      },
    ],
  },

];

export default appRoutes;