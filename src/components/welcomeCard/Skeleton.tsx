import { Link } from "react-router-dom"
import ContentLoader from "react-content-loader"
import IconSegure from "@mui/icons-material/VpnLock"
import IconShipping from "@mui/icons-material/LocalShipping"
import IconOrder from "@mui/icons-material/Web"
import IconSupport from "@mui/icons-material/Groups"

export default function Skeleton() {
    return (
        <div className="d-flex flex-column container px-4 py-5 w-100">

            <ContentLoader
                speed={1}
                width={400}
                height={160}
                viewBox="0 0 340 84"
                backgroundColor="#d9d9d9"
                foregroundColor="#ededed"
            >
                <rect x="9" y="4" rx="0" ry="0" width="320" height="22" />
                <rect x="18" y="14" rx="0" ry="0" width="303" height="6" />
                <rect x="11" y="33" rx="0" ry="0" width="108" height="13" />
                <rect x="129" y="33" rx="0" ry="0" width="60" height="13" />
                <rect x="196" y="33" rx="0" ry="0" width="60" height="13" />
            </ContentLoader>

            <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-2">

                <ContentLoader
                    speed={2}
                    width={400}
                    height={160}
                    viewBox="0 0 400 160"
                    backgroundColor="#d9d9d9"
                    foregroundColor="#ededed"
                >
                    <rect x="50" y="6" rx="4" ry="4" width="343" height="38" />
                    <rect x="8" y="6" rx="4" ry="4" width="35" height="38" />
                    <rect x="50" y="55" rx="4" ry="4" width="343" height="38" />
                    <rect x="8" y="55" rx="4" ry="4" width="35" height="38" />
                    <rect x="50" y="104" rx="4" ry="4" width="343" height="38" />
                    <rect x="8" y="104" rx="4" ry="4" width="35" height="38" />
                </ContentLoader>

                <ContentLoader
                    speed={2}
                    width={400}
                    height={160}
                    viewBox="0 0 400 160"
                    backgroundColor="#d9d9d9"
                    foregroundColor="#ededed"
                >
                    <rect x="50" y="6" rx="4" ry="4" width="343" height="38" />
                    <rect x="8" y="6" rx="4" ry="4" width="35" height="38" />
                    <rect x="50" y="55" rx="4" ry="4" width="343" height="38" />
                    <rect x="8" y="55" rx="4" ry="4" width="35" height="38" />
                    <rect x="50" y="104" rx="4" ry="4" width="343" height="38" />
                    <rect x="8" y="104" rx="4" ry="4" width="35" height="38" />
                </ContentLoader>

            </div>
        </div>
    )
}