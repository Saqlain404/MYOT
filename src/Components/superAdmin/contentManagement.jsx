import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "rsuite";
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, ContentState } from "draft-js";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import MainSidebar from "./sidebar";
import axios from "axios";

const ContentManagement = () => {
  const [editorContent, setEditorContent] = useState(
    EditorState.createWithContent(
      ContentState.createFromText(
        "This privacy policy describes the treatment of information provided or collected on the websites or applications where this privacy policy is posted. We follow this privacy policy in accordance with applicable law in the places where we operate. This policy is separate from our HIPAA Notice of Privacy Practices Policy; however, this policy refers to the HIPAA Notice of Privacy Practices Policy as it relates to your health information. Privacy Practices Policy\n\n" +
        "Please keep in mind that when you provide information to us on a third-party site or platform (for example, via credit card vendor or through a patient portal), the information you provide may be separately collected by the third-party site or platform. The information we collect is covered by this privacy policy, and the information the third-party site or platform collects is subject to the third-party site or platform's privacy practices. Privacy choices you have made on the third-party site or platform will not apply to our use of the information we have collected directly through our website. Please also keep in mind that our site or communications may contain links to other sites or applications not owned or controlled by us and we are not responsible for the privacy practices of those sites. We encourage you to be aware when you leave our sites or applications and to read the privacy policies of other sites that may collect your Personal Information."
      )
    )
  );

  const [content, setcontent] = useState([])

  const [isEditing, setIsEditing] = useState(false);

  const authToken = localStorage.getItem('token-main-admin');
  const headers = {
    'x-auth-token-admin': authToken,
  };
  const contentManagement = async () => {
    try {
      if (!authToken) {
        console.warn('Authentication token not found');
      }
      const response = await axios.get(`${process.env.REACT_APP_APIENDPOINT}/api/admin/content-details/65b0a0896dcaaf68cc29b7db`, {
        headers,
      });

      const ticketData = response.data.results.contents;
      setcontent(ticketData)
      console.log(ticketData)
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }
  useEffect(() => {
    contentManagement()
  }, [])


  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Save the edited content if needed
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar">
            <MainSidebar />
          </div>
          <div className="col middle-content bg-body-tertiary p-0 min-vh-100">
            <div className="container-fluid border-bottom sticky-top bg-white mb-4">
              <nav className="row header bg-white  ">
                <ul className="col align-items-center mt-3">
                  <li className="nav-item dropdown-hover d-none d-lg-block">
                    <a className="nav-link fw-bold">Content Management</a>
                  </li>
                </ul>
                <div className="col d-flex align-items-center  justify-content-end">
                  <form className="" role="search">
                    <input
                      className="form-control search-bar"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </form>
                  <div className="">
                    <img
                      src="/images/dashboard/announcement.png"
                      alt=""
                      className="ms-4 "
                    />
                    <Link to={"/Admin/Chat"}>
                      <img
                        src="/images/dashboard/chat-left-dots-fill.png"
                        alt=""
                        className="ms-4"
                      />
                    </Link>
                    <img
                      src="/images/dashboard/round-notifications.png"
                      alt=""
                      className="ms-4"
                    />
                  </div>
                </div>
              </nav>
            </div>

            <div className="container px-4 text-center min-vh-100 ">
              <div className="row bg-white rounded  p-4 m-4">
                {/* <div className="col-12 d-flex">
                  <Link
                    to={"/Admin/Help"}
                    className="text-decoration-none"
                  >
                    <p className="td-text border-bottom me-3">Template Guidelines</p>
                  </Link>
                  <Link
                    to={"/Admin/Help/Help-Support"}
                    className="text-decoration-none"
                  >
                    <p className="th-text me-3">Help & Support</p>
                  </Link>
                  <Link
                    to={"/Admin/Help/Contact-Us"}
                    className="text-decoration-none"
                  >
                    <p className="th-text">Contact Us</p>
                  </Link>
                </div> */}
                <div className="col-12">
                  <p className="col-12 mb-4 help-text">
                    <div className="col-12 d-flex justify-content-between mb-2">
                      <h4>Privacy Policies</h4>
                      {isEditing ? (
                        <Button
                          style={{ width: "70px" }}
                          appearance="primary"
                          className="btn mb-3 me-2 rounded-2"
                          onClick={handleSaveClick}
                        >
                          Save
                        </Button>
                      ) : (
                        <Button
                          style={{ width: "70px" }}
                          appearance="primary"
                          className="btn mb-3 me-2 rounded-2"
                          onClick={handleEditClick}
                        >
                          Edit
                        </Button>
                      )}
                    </div>
                    {isEditing ? (
                      <Editor
                        editorState={editorContent}
                        onEditorStateChange={(newEditorState) => setEditorContent(newEditorState)}
                      />
                    ) : (
                      <div >
                       
                        {content.map((item) => (
                          <p className="col-12 mb-4 help-text">{item.description}</p>
                        ))}
                      </div>
                    )}


                    <h4 className="mb-2">TYPES OF INFORMATION WE COLLECT</h4>
                    We collect Personal Information, including Personal Health
                    Information, and we may use Personal Information to create a
                    separate type of information, aggregate information which
                    removes your identity and allows us to create statistical
                    data. Passport Journeys plans to enroll in clinical trials
                    for future research grants and de-idenitifed information
                    from each user will be recorded: outcomes, questionnaire
                    responses, survey responses, duration of engagement,
                    compliance with appointments and assigned homework will be
                    recorded and utilized as pilot data.
                    <br />
                    <br />
                    For example, we collect:
                    <br />
                    <br />
                    · Registration information you provide when you create an
                    account on our portal, such as your first name and surname,
                    location of residence, gender, date of birth, email address,
                    username, and password;
                    <br />
                    <br />
                    · Transaction information you provide when you purchase a
                    product or service from us, such as your postal address,
                    telephone number, and payment information;
                    <br />
                    <br />
                    · Information we obtain from a third party, such as a site
                    or platform provider, about use of our applications on
                    third-party platforms or devices.
                    <br />
                    <br />
                    <h4 className="mb-2">HOW WE COLLECT YOUR INFORMATION</h4>
                    We collect information you provide to us when you purchase
                    products or services, register with us, or otherwise
                    interact with us using one or more devices. You may provide
                    information to us in a variety of ways, including by typing
                    or speaking.
                    <br />
                    <br />
                    We collect information through a variety of technologies,
                    such as application program interfaces, and Web beacons,
                    including when you visit our sites. <br />
                    <br />
                    <h4 className="mb-2">
                      SHARING YOUR INFORMATION WITH OTHER ENTITIES
                    </h4>
                    We will not share your Personal Information with a third
                    party, except as required or permitted by law, and your
                    Personal Health Information will not be shared with a third
                    party, except as is described by our HIPAA Notice of Privacy
                    Practices Policy.
                    <br />
                    <br />
                    Please note that once we share your personal information
                    with another company, the information received by the other
                    company is controlled by that company and becomes subject to
                    the other company's privacy practices.
                    <br />
                    <br />
                    When companies perform services on our behalf, like credit
                    card processing, package delivery, marketing and
                    advertising, and customer service, they may receive your
                    personal information; however, these companies are
                    prohibited from using your personal information for purposes
                    other than those requested by us or required by law; and
                    <br />
                    <br />
                    We may share your personal information with third parties in
                    connection with a transaction, to enforce our Terms of Use
                    or rules, to comply with legal process, or in other cases if
                    we believe in good faith that disclosure is required by law.
                    <br />
                    <br />
                    Notice of Privacy Practices -
                    https://www.passportjourneysapp.com/privacy-practices
                    <br />
                    <br />
                    <h4 className="mb-2">YOUR CONTROLS AND CHOICES</h4>
                    We provide you the ability to exercise certain controls and
                    choices regarding our collection, use and sharing of your
                    information. You may contact us to exercise these options by
                    calling 1-800-957-6533 or sending an email to
                    privacy@passportjourneysapp.com. In accordance with
                    applicable law, your controls and choices may include:
                    <br />
                    <br />
                    · Correcting, updating, and deleting your Registration
                    Information
                    <br />
                    <br />
                    · Requesting access to the personal information we hold
                    about you and that we amend it as stated in our HIPAA Notice
                    of Privacy Practices Policy
                    <br />
                    <br />
                    Please be aware that collection of certain personal
                    information is mandatory because of the service we provide,
                    but we will make that clear at the point of collection so
                    that you can make an informed decision whether to
                    participate through electronic means. <br />
                    <br />
                    <h4 className="mb-2">DATA SECURITY</h4>
                    The security, integrity, and confidentiality of your
                    information are extremely important to us. We have
                    implemented technical, administrative, and physical
                    safeguards that are designed to protect information from
                    unauthorized access, disclosure, use, and modification. We
                    regularly review our security procedures to consider
                    appropriate technology and methods as appropriate, or as
                    required by law. Please be aware that, despite our best
                    efforts, no security measures are perfect. If you believe
                    that your information has been compromised, contact us
                    immediately at 1-800-957-6533.
                    <br />
                    <br />
                    <h4 className="mb-2">CHANGES TO THIS PRIVACY POLICY</h4>
                    From time to time, we may change this privacy policy to
                    accommodate new technologies, industry practices, regulatory
                    requirements or for other purposes. We will provide notice
                    to you if these changes are material and, where required by
                    applicable law, we will obtain your consent. Notice may be
                    by email to you at the last email address you provided us,
                    by posting notice of such changes on our sites and
                    applications, or by other means, consistent with applicable
                    law.
                    <br />
                    <br />
                    If you have a comment or question about this privacy policy,
                    please contact our Privacy Office –
                    privacy@passportjourneysapp.com.
                    <br />
                  </p>
                </div>
              </div>
              <div className="row bg-white rounded  p-4 m-4">
                <div className="col-12">
                  <p className="col-12 mb-4 help-text">
                    <div className="col-12 d-flex justify-content-between mb-2">
                      <h4>Terms & Condition</h4>
                      {isEditing ? (
                        <Button
                          style={{ width: "70px" }}
                          appearance="primary"
                          className="btn mb-3 me-2 rounded-2"
                          onClick={handleSaveClick}
                        >
                          Save
                        </Button>
                      ) : (
                        <Button
                          style={{ width: "70px" }}
                          appearance="primary"
                          className="btn mb-3 me-2 rounded-2"
                          onClick={handleEditClick}
                        >
                          Edit
                        </Button>
                      )}
                    </div>
                    This privacy policy describes the treatment of information
                    provided or collected on the websites or applications where
                    this privacy policy is posted. We follow this privacy policy
                    in accordance with applicable law in the places where we
                    operate. This policy is separate from our HIPAA Notice of
                    Privacy Practices Policy; however, this policy refers to the
                    HIPAA Notice of Privacy Practices Policy as it relates to
                    your health information. Privacy Practices Policy
                    <br /> <br />
                    Please keep in mind that when you provide information to us
                    on a third-party site or platform (for example, via credit
                    card vendor or through a patient portal), the information
                    you provide may be separately collected by the third-party
                    site or platform. The information we collect is covered by
                    this privacy policy, and the information the third-party
                    site or platform collects is subject to the third-party site
                    or platform's privacy practices. Privacy choices you have
                    made on the third-party site or platform will not apply to
                    our use of the information we have collected directly
                    through our website. Please also keep in mind that our site
                    or communications may contain links to other sites or
                    applications not owned or controlled by us and we are not
                    responsible for the privacy practices of those sites. We
                    encourage you to be aware when you leave our sites or
                    applications and to read the privacy policies of other sites
                    that may collect your Personal Information. <br />
                    <br />
                    <h4 className="mb-2">TYPES OF INFORMATION WE COLLECT</h4>
                    We collect Personal Information, including Personal Health
                    Information, and we may use Personal Information to create a
                    separate type of information, aggregate information which
                    removes your identity and allows us to create statistical
                    data. Passport Journeys plans to enroll in clinical trials
                    for future research grants and de-idenitifed information
                    from each user will be recorded: outcomes, questionnaire
                    responses, survey responses, duration of engagement,
                    compliance with appointments and assigned homework will be
                    recorded and utilized as pilot data.
                    <br />
                    <br />
                    For example, we collect:
                    <br />
                    <br />
                    · Registration information you provide when you create an
                    account on our portal, such as your first name and surname,
                    location of residence, gender, date of birth, email address,
                    username, and password;
                    <br />
                    <br />
                    · Transaction information you provide when you purchase a
                    product or service from us, such as your postal address,
                    telephone number, and payment information;
                    <br />
                    <br />
                    · Information we obtain from a third party, such as a site
                    or platform provider, about use of our applications on
                    third-party platforms or devices.
                    <br />
                    <br />
                    <h4 className="mb-2">HOW WE COLLECT YOUR INFORMATION</h4>
                    We collect information you provide to us when you purchase
                    products or services, register with us, or otherwise
                    interact with us using one or more devices. You may provide
                    information to us in a variety of ways, including by typing
                    or speaking.
                    <br />
                    <br />
                    We collect information through a variety of technologies,
                    such as application program interfaces, and Web beacons,
                    including when you visit our sites. <br />
                    <br />
                    <h4 className="mb-2">
                      SHARING YOUR INFORMATION WITH OTHER ENTITIES
                    </h4>
                    We will not share your Personal Information with a third
                    party, except as required or permitted by law, and your
                    Personal Health Information will not be shared with a third
                    party, except as is described by our HIPAA Notice of Privacy
                    Practices Policy.
                    <br />
                    <br />
                    Please note that once we share your personal information
                    with another company, the information received by the other
                    company is controlled by that company and becomes subject to
                    the other company's privacy practices.
                    <br />
                    <br />
                    When companies perform services on our behalf, like credit
                    card processing, package delivery, marketing and
                    advertising, and customer service, they may receive your
                    personal information; however, these companies are
                    prohibited from using your personal information for purposes
                    other than those requested by us or required by law; and
                    <br />
                    <br />
                    We may share your personal information with third parties in
                    connection with a transaction, to enforce our Terms of Use
                    or rules, to comply with legal process, or in other cases if
                    we believe in good faith that disclosure is required by law.
                    <br />
                    <br />
                    Notice of Privacy Practices -
                    https://www.passportjourneysapp.com/privacy-practices
                    <br />
                    <br />
                    <h4 className="mb-2">YOUR CONTROLS AND CHOICES</h4>
                    We provide you the ability to exercise certain controls and
                    choices regarding our collection, use and sharing of your
                    information. You may contact us to exercise these options by
                    calling 1-800-957-6533 or sending an email to
                    privacy@passportjourneysapp.com. In accordance with
                    applicable law, your controls and choices may include:
                    <br />
                    <br />
                    · Correcting, updating, and deleting your Registration
                    Information
                    <br />
                    <br />
                    · Requesting access to the personal information we hold
                    about you and that we amend it as stated in our HIPAA Notice
                    of Privacy Practices Policy
                    <br />
                    <br />
                    Please be aware that collection of certain personal
                    information is mandatory because of the service we provide,
                    but we will make that clear at the point of collection so
                    that you can make an informed decision whether to
                    participate through electronic means. <br />
                    <br />
                    <h4 className="mb-2">DATA SECURITY</h4>
                    The security, integrity, and confidentiality of your
                    information are extremely important to us. We have
                    implemented technical, administrative, and physical
                    safeguards that are designed to protect information from
                    unauthorized access, disclosure, use, and modification. We
                    regularly review our security procedures to consider
                    appropriate technology and methods as appropriate, or as
                    required by law. Please be aware that, despite our best
                    efforts, no security measures are perfect. If you believe
                    that your information has been compromised, contact us
                    immediately at 1-800-957-6533.
                    <br />
                    <br />
                    <h4 className="mb-2">CHANGES TO THIS PRIVACY POLICY</h4>
                    From time to time, we may change this privacy policy to
                    accommodate new technologies, industry practices, regulatory
                    requirements or for other purposes. We will provide notice
                    to you if these changes are material and, where required by
                    applicable law, we will obtain your consent. Notice may be
                    by email to you at the last email address you provided us,
                    by posting notice of such changes on our sites and
                    applications, or by other means, consistent with applicable
                    law.
                    <br />
                    <br />
                    If you have a comment or question about this privacy policy,
                    please contact our Privacy Office –
                    privacy@passportjourneysapp.com.
                    <br />
                  </p>
                </div>
              </div>
              <div className="row bg-white rounded  p-4 m-4">
                <div className="col-12">
                  <p className="col-12 mb-4 help-text">
                    <div className="col-12 d-flex justify-content-between mb-2">
                      <h4>About Us</h4>
                      {isEditing ? (
                        <Button
                          style={{ width: "70px" }}
                          appearance="primary"
                          className="btn mb-3 me-2 rounded-2"
                          onClick={handleSaveClick}
                        >
                          Save
                        </Button>
                      ) : (
                        <Button
                          style={{ width: "70px" }}
                          appearance="primary"
                          className="btn mb-3 me-2 rounded-2"
                          onClick={handleEditClick}
                        >
                          Edit
                        </Button>
                      )}
                    </div>
                    MYOT is a proposed SaaS solution that allows organizations
                    to create, manage, and collaborate on standardized document
                    templates. This technical specification report outlines the
                    system architecture, core functionality, requirements, and
                    deployment strategy for the MYOT platform.
                    <br /> <br />
                    The goals of MYOT are to:
                    <br /> <br />
                    - Provide a centralized system for managing all company
                    document templates
                    <br /> <br />
                    - Reduce the time spent manually generating documents
                    <br /> <br />
                    - Ensure brand consistency through templates
                    <br /> <br />
                    - Support cross-departmental collaboration on templates
                    <br /> <br />
                    - Deliver easy-to-use template creation for non-technical
                    users
                    <br /> <br />
                    From a technology perspective, MYOT will utilize a modern
                    cloud-native stack designed for scalability, reliability and
                    rapid iteration. The microservices architecture and
                    Kubernetes infrastructure will provide elastic scaling.
                    Redundancy protections and security controls will meet
                    enterprise standards.
                    <br /> <br />
                    The core components of the platform include the visual
                    template designer, review/approval workflows, integration
                    with employee databases, usage analytics, and customizable
                    access permissions. Robust API endpoints will facilitate
                    integrations.
                    <br /> <br />
                    Extensive automated testing at the unit, integration and
                    system levels will validate functionality, usability and
                    performance. Staging environments mirror production
                    infrastructure to minimize risk. CI/CD pipelines enable
                    rapid and safe deployment cycles.
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentManagement;
