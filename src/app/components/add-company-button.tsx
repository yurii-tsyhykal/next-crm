'use client';

import React, { useState } from 'react';
import CompanyFormModal from './company-form-modal';

export default function AddCompanyButton() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(true)}>Add company</button>
      <CompanyFormModal
        onSubmit={console.log}
        show={show}
        onClose={() => setShow(false)}
      />
    </>
  );
}
