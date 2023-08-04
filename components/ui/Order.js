import PillowLink from "./PillowLink";
import useTranslation from "next-translate/useTranslation";
import {useEffect, useState} from "react";
import Loading from "../ui/Loading";
import {fetchAPI} from "lib/api";
import Modal from "./Modal";
import FormOrder from "../Forms/FormOrder";

export default function Order() {
  const [data, setData]=useState();
  const i18n=useTranslation();
  const locale=i18n.lang;

  const [modalIsOpen, setModalIsOpen]=useState(false);

  const handleOpenModal=() => {
    setModalIsOpen(true);
  };

  const handleCloseModal=() => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    async function fetchData() {
      const contactRes=await fetchAPI("/contact", {
        fields: ["Phone", "PhoneLink"],
        locale: locale,
      });

      setData(contactRes.data.attributes);
    }
    fetchData();
  }, [locale]);

  if (!data) {
    return <Loading />;
  }

  return (
    <div className="hidden md:flex items-center min-w-fit">
      <a
        href={`tel:${data.PhoneLink}`}
        className="p-2.5 mr-9 tracking-tight  hover:text-suva-grey"
      >
        {data.Phone}
      </a>
      <div onClick={handleOpenModal}>
        <PillowLink text="Отправить заявку" variant="white" variantSvg='blue' />
      </div>
      <Modal isOpen={modalIsOpen} onClose={handleCloseModal}>
        <FormOrder />
      </Modal>
    </div>
  );
}
