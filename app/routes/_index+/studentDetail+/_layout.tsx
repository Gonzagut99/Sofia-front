import { Outlet } from "@remix-run/react";
import { PageContainer } from "~/components/ui/custom/PageContainer";
import { BackNavigator } from "~/routes/resources+/back-navigator";

function _layout() {
  return (
    <PageContainer className="flex flex-col gap-10">
      <BackNavigator></BackNavigator>
      <Outlet></Outlet>
    </PageContainer>
  );
}

export default _layout;
