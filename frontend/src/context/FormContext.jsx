import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const FormContext = createContext();

export const useForm = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
   const [formData, setFormData] = useState({
      title: "",
      subTitle: "",
      description: "",
      typeOfCampaign: "",
      dateAndHourCampaign: "",
      isPrivate: false,
      isFeatured: false,
      numberOfNumbers: "",
      quotaValue: "",
      timeToPay: "",
      limitValue: "",
      minimunQuantity: "",
      maximunQuantity: "",
      minimumCampaign: "",
      isAwardedQuotas: false,
      awardedQuotas: "",
      awardedQuotasDescription: "",
      isRanking: false,
      showTicketQuantity: false,
      rankingMessage: "",
      winnerName: "",
      showProgressBar: false,
      isDiscount: false,
   });

   const updateFormData = (key, value) => {
      setFormData((prevData) => ({
         ...prevData,
         [key]: value,
      }));
   };

   return (
      <FormContext.Provider value={{ formData, updateFormData }}>
         {children}
      </FormContext.Provider>
   );
};

FormProvider.propTypes = {
   children: PropTypes.node.isRequired,
};
