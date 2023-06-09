import AddressTitle from "./AddressTitle";
import AddressText from "./AddressText";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

export default function Address({ address, phone, email }) {
  const { t } = useTranslation("common");
  return (
    <div className="container  px-3.8 lg:max-w-[1746px] py-5">
      <AddressTitle title={t`contacts.address`} />
      <AddressText text={address} />
      <AddressTitle title={t`contacts.numbers`} />
      <p className="w-2/4 tracking-tight pb-5">
        {phone}
        <br />
        <Link href={`mailto:${email}`}>{email}</Link>
      </p>
    </div>
  );
}
