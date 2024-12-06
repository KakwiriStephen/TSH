import React from "react";

function Principal() {
  return (
    <section className="regular mt-4 flex items-center justify-center">
      <div className="bg-white text-center p-6 mb-8 max-w-[1200px] shadow-2xl rounded-[65px]">
        <h1 className="text-black text-2xl capitalize font-bold p-4">
          Message from our Principal
        </h1>
        <img
          src="/assets/princi.png"
          alt="Principal"
          className="mx-auto mb-4 w-auto max-h-[300px] rounded-lg"
        />
        <p className="text-base font-normal p-4 leading-loose">
          At Treshaw International School, we have developed a very strong
          relationship with all our educational stakeholders. We do collaborate
          with the parents, guardians, communities, and societies to educate
          families and students who have different learning abilities, medical
          challenges, behavioral differences, different age groups, different
          religious beliefs and practices, different geographical locations, and
          students of different social backgrounds. We conduct efficient and
          effective learning classes in our school for all our regular students
          during the day, evening and weekends. We charge Ksh. 10,000 per month
          for the personalized one on one remedial classes which are conducted
          at the school between 4.30 pm and 6.00 pm. Our terms of contract does
          not allow any of our teachers to tutor any of our students outside the
          school premises (our teachers are not allowed to tutor any of Treshaw
          International School learners at their respective homes). Candidate
          classes have Compulsory Saturday classes which run between 9.00 am and
          1.00 pm. This includes Year 6, Year 11, Year 12 and Year 13.
        </p>
        <p className="text-xl font-semibold mt-6">Pr. Mr. Principal</p>
      </div>
    </section>
  );
}

export default Principal;
