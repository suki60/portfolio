import Image from "next/image"
import React from "react"

const Contact = ({}) => {
  return (
    <div class="container sm:h-screen -mt-[var(--navbar-height)] flex justify-center items-center">
      <div class="flex flex-col sm:flex-row mt-6">
        <Image
          alt="fa picture"
          className="hidden sm:block rounded-3xl"
          src="/me.jpeg"
          width={200}
          height={2000}
        />
        <Image
          alt="fa picture"
          className="sm:hidden rounded-xl mx-auto mb-6"
          src="/me-small.jpeg"
          width={100}
          height={100}
        />
        <div class="flex flex-col justify-center sm:ml-6">
          <h3 class="font-bold italic">past</h3>
          <div class="pb-3">
            graduated as a mechanical engineering, unsatisfied with job
            experiences, i looked for something more thrilling and challenging.
            then i found code...
          </div>
          <h3 class="font-bold italic">present</h3>
          <div class="pb-3">
            currently working as a software engineering for capterra, a
            gartner company
          </div>
          <h3 class="font-bold italic">quote</h3>
          <div>
            <span className="font-light">&quot;simplicity is the ultimate sophistication&quot;</span> - leonardo da
            vinci
          </div>
          <hr class="my-4" />
          <h3 class="font-bold italic">contact</h3>
          <div class="pb-3">fran.altes@gmail.com</div>
        </div>
      </div>
    </div>
  )
}

export default Contact
