import React from 'react';

const FeeRefundRules = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <div className="w-full bg-gray-800 h-40 mt-20 flex items-center justify-center">
        <div className="w-5/6 mx-auto">
          <h1 className="text-center text-white text-4xl">Fee Refund Rules</h1>
        </div>
      </div>
      <div className="w-11/12 pt-3 pb-3 mx-auto">
        <section>
          <h2 className="text-xl font-semibold mb-2 text-orange-600">How to Apply for Refund</h2>
          <ol className="list-decimal pl-5">
            <li>Last Date to Apply for First Refund and Last Refund is mentioned on relevant Course Page of the Course Booklet and in your Fee Challan/ Fee Receipt. Amount Deductible in First Refund Case and Last Refund Case (towards Administrative & Academic Expenses) are also mentioned in the relevant Course Page of the Course Booklet Fee Challan/ Fee Receipt.</li>
            <li>Prescribed Refund Application Form can be obtained from our Office.</li>
            <li>Refund request made verbally or through phone/email/fax shall not be entertained in any case.</li>
            <li>Refund Application in the prescribed format will be accepted along with Original Fee Receipt, INFINITE EduVerse Identity Card & Attendance Card. No refund will be made after the Last Refund Date, except special cases as below.</li>
            <li>Refund will be credited in Father / Mother / Student Bank Account through NEFT / RTGS mode only. For this you have to submit Cancelled Cheque or Bank Passbook first page copy along with Refund Form.</li>
            <li>Refund rules are SAME even
              <ul className="list-disc pl-5">
                <li>If a student joins class after commencement date or</li>
                <li>If a student doesn't join or attend even a single class at all or</li>
                <li>If a student applies for a refund before the commencement of the class.</li>
              </ul>
            </li>
          </ol>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2 pt-2 text-orange-600">Refund in Special Case After Last Refund Date</h2>
          <ol className="list-decimal pl-5">
            <li>If <b>an enrolled</b> Student gets Admission in any Medical / Engineering College <b>(for which he has taken Admission)</b> located in India for MBBS / BDS / B.Tech. / B.E. / B.Arch. only through any Competitive Examination, refund will be made after deducting <b>amount equivalent to Last Refund amount out of Fee Paid. Refund shall not be payable if amount paid is less than amount equivalent to Last Refund amount.</b></li>
            <li>Refund of fee will be applicable only for the aforesaid courses. Refund will not be made for B.Pharma / B.YNS / B. Physiotherapy / B.VSc, B.Sc. and other Courses.</li>
            <li>Last date for such special case refund is <b className="text-red-500">30/09/2024.</b></li>
            <li>For this following documents must be submitted along with the prescribed Refund Application Form.
              <ul className="list-disc pl-5">
                <li>Original Fee Receipt of INFINITE EduVerse.</li>
                <li>Identity Card of INFINITE EduVerse.</li>
                <li>Attendance Card of INFINITE EduVerse.</li>
                <li>Photo Copy of College Call Letter / Counseling Letter.</li>
                <li>Fee Receipt of College Admission.</li>
              </ul>
            </li>
            <li>Refund application on the ground of severe disease may be considered by the management committee, after passing the Last Refund date on submission of Medical Prescription / Report.</li>
          </ol>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-2 mt-2 text-orange-600">Refund Dates</h2>
          <table className="w-full border-collapse mt-2">
            <thead>
              <tr>
                <th className="border p-2">Last date of 1st Refund</th>
                <th className="border p-2">Last date of 2nd Refund</th>
                <th className="border p-2">Last date of 3rd Refund</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Within 15 days of Admission</td>
                <td className="border p-2">23-sep-2024</td>
                <td className="border p-2">No REFUND</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <h6 className="font-bold py-2">1. After deposition of the fee, following charges are applicable for :</h6>
          <table className="w-full border-collapse mt-2">
            <thead>
              <tr>
                <th className="border p-2">Item</th>
                <th className="border p-2">Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Duplicate ID Card</td>
                <td className="border p-2">200/-</td>
              </tr>
              <tr>
                <td className="border p-2">Duplicate Attendance Card</td>
                <td className="border p-2">200/-</td>
              </tr>
              <tr>
                <td className="border p-2">Duplicate Fee Receipt</td>
                <td className="border p-2">200/-</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <h6 className="font-bold py-2">2. Late Fee Charges</h6>
          <p>If a student fails to deposit 2nd Installment on or before the Last Date mentioned in the course booklet, late fee @ 50/- per day will be charged (in addition to Fee) up to 30 days. After this the admission shall be treated as canceled without any prior information & refund of fee.</p>
          <b>*Days will be counted from class commencement date.</b>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2 mt-2 text-orange-600">Non-Refundable Items</h2>
          <p className="text-sm font-bold text-red-500">1. Any Test Packages once purchased will not be canceled or refunded.</p>
          <p className="text-sm font-bold text-red-500">2. Admission fee once paid will not be canceled or refunded.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2 mt-2 text-orange-600">Refund Guidelines</h2>
          <p>According to the Guidelines of the <b>District Collector, Sikar on 12 May, 2016,</b> students who want to discontinue study at this institute may get a refund strictly in accordance with the following rules:</p>
          <ol className="list-decimal pl-5">
            <li>Refund of any amount if payable shall be refunded by cheque only after deducting the following amount + GST:
              <ul className="list-disc pl-5">
                <li>0 to 10 days of admission Deduction = Rs. 5,000+GST</li>
                <li>11 to 20 days of admission Deduction = Rs. 10,000+GST</li>
                <li>21 to 30 days of admission Deduction = Rs. 15,000+GST</li>
              </ul>
            </li>
            <li>After 30 days of admission, 30% of the whole amount of the course fee will be considered as a part of the Institute element and it is not refundable in any case.</li>
            <li>Remaining 70% of the whole amount of the course fee will be divided in terms of study period and balance if any refundable after deducting proportionate fee for the period studied.</li>
            <li>If the Course fee is refunded in that case only parents of the ward will be eligible to take the amount and the amount will be refunded through Cheque only.</li>
            <li>To receive the refundable amount, the parents of the ward should apply in writing.</li>
            <li>Refund request through Email/Fax/Telephone/Mobile/SMS will not be entertained.</li>
            <li>Refund request through WhatsApp 7240403535. (Only WhatsApp)</li>
            <li>In special cases where any student gets admission in Govt. Medical/ Govt. Engineering college may get a refund of 50% of the amount deposited deducting GST on it even after 30 days on producing the following document:
              <ul className="list-disc pl-5">
                <li>Copy of college seat allotment letter.</li>
                <li>Copy of fee receipt of the college where admission is taken.</li>
                <li><b>Original fee receipt of INFINITE EduVerse.</b></li>
                <li>Student I-Card.</li>
              </ul>
            </li>
            <li>Refund requests will be processed for those students only, who will submit the refund request form available on our website.</li>
            <li>Original fee deposit receipt and all student cards must be attached with the refund request.</li>
            <li>For any legal dispute jurisdiction will be Sikar (Rajasthan) only.</li>
          </ol>
          <p>Note: No refund shall be provided to any student in case the student is rusticated from the Institute on disciplinary grounds.</p>
        </section>
      </div>
    </>
  );
};

export default FeeRefundRules;
