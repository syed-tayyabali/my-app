import { ICompanyLinks } from "../Types";

export const CompanyIcon = ({
  compLinkObj,
  currTheme,
}: {
  compLinkObj: ICompanyLinks;
  currTheme: any;
}) => {
  return (
    <div>
      <a style={{ textDecoration: "none" }} href={compLinkObj.link}>
        <compLinkObj.icon
          sx={{
            color: currTheme.palette.mode === "light" ? "#000" : "#C8C8C8",
          }}
        />
      </a>
    </div>
  );
};
