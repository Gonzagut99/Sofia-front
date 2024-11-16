import { Outlet } from "@remix-run/react";
import { PageContainer } from "~/components/ui/custom/PageContainer";
import { BackNavigator } from "~/routes/resources+/back-navigator";

function _layout() {
    return (
        <div className="bg-gradient-to-b from-zinc-900 via-blue-700 to-blue-400 text-white">
            <PageContainer className="flex flex-col gap-10">
                <BackNavigator></BackNavigator>
                <Outlet></Outlet>
            </PageContainer>
        </div>
    );
    }

export default _layout;