import jobLight from '@/assets/images/personal/job-light.png'
import job from '@/assets/images/personal/job.png'
import schoolLight from '@/assets/images/personal/school-light.png'
import school from '@/assets/images/personal/school.png'

import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Card, CardBody, Col, Container, Row } from 'react-bootstrap'

const LifeTime = () => {
  return (
    <section className="section bg-gradient-light-white" id="resume">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col xs={12} md={10} lg={7} className="text-center">
            <span className="badge badge-lg rounded bg-soft-alt-success fw-normal fs-13 text-uppercase">Life Time</span>
            <h2 className="fs-2 fw-medium lh-1 text-dark my-3">Education &amp; Experience</h2>
            <p className="text-gray-700 fs-18 fs-lg mb-4 mb-md-5 lh-lg">
              We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning .
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Row className="g-0">
              <Col lg={4} md={6}>
                <Card className="rounded bg-light h-100 border-0">
                  <CardBody className="d-flex justify-content-center align-items-center">
                    <div className="mx-auto text-center">
                      <img src={school} alt='school' className="vector-dark" height={150} />
                      <img src={schoolLight} alt='schoolLight' className="vector-light" height={150} />
                      <h5 className="text-dark fs-22 fw-medium my-2">Education</h5>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col lg={8} md={6}>
                <Card className="rounded bg-white  h-100 border-0">
                  <CardBody className="p-0">
                    <Accordion defaultActiveKey={'1'} className="accordion-flush" id="Education_accordion">
                      <AccordionItem eventKey='1'>
                        <AccordionHeader as={'h2'} id="second">
                          BSC in computer science and engineering
                          <span className="fw-medium text-primary ms-auto fs-14">2017 - 2022</span>
                        </AccordionHeader>
                        <AccordionBody className="accordion-body">
                          <p className="text-muted mb-3">Graduated with a B.Sc. in Computer Science and Engineering from American International University–Bangladesh (AIUB), with a passion for building innovative software solutions.
                          </p>
                          <p className="fw-medium">American International University - Bangladesh (AIUB)</p>
                        </AccordionBody>
                      </AccordionItem>
                      <AccordionItem eventKey='2'>
                        <AccordionHeader as={'h2'} id="higher">
                          Higher Secondary School Certificate (HSC)
                          <span className="fw-medium text-primary ms-auto fs-14">2014 - 2016</span>
                        </AccordionHeader>
                        <AccordionBody className="accordion-body">
                          <p className="text-muted mb-3">Completed Higher Secondary Certificate (HSC) from Cantonment Public School & College, Rangpur in 2016, building a strong base in science and technology.
                          </p>
                          <p className="fw-medium">Cantonment Public School & College, Rangpur.</p>
                        </AccordionBody>
                      </AccordionItem>
                    </Accordion>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <hr className="hr-dashed" />
            <Row className="g-0">
              <Col lg={4} md={6}>
                <Card className="rounded bg-light h-100 border-0">
                  <CardBody className="d-flex justify-content-center align-items-center">
                    <div className="mx-auto text-center">
                      <img src={job} alt='job' className="vector-dark" height={150} />
                      <img src={jobLight} alt='jobLight' className="vector-light" height={150} />
                      <h5 className="text-dark fs-22 fw-medium my-2">Experience</h5>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col lg={8} md={6}>
                <Card className="rounded bg-white  h-100 border-0">
                  <CardBody className="p-0">
                    <Accordion defaultActiveKey={'1'} className="accordion-flush" id="Experience_accordion">
                      <AccordionItem eventKey='1'>
                        <AccordionHeader id="second-co">
                          Codemen Solution Limited
                          <span className="fw-medium text-primary ms-auto fs-14">2022 - Present</span>
                        </AccordionHeader>
                        <AccordionBody>
                          <p className="text-muted mb-1">- Manage full-stack web development using React.js, Next.js, and modern backend technologies while mentoring developers, optimizing system performance, and designing scalable solutions.</p>
                          <span className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-13 text-uppercase mt-2">Next.js</span>&nbsp;
                          <span className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-13 text-uppercase mt-2">Node.js</span>&nbsp;
                          <span className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-13 text-uppercase mt-2">Javascript</span>
                          <span className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-13 text-uppercase mt-2">Typescript</span>
                        </AccordionBody>
                      </AccordionItem>
                      <AccordionItem eventKey='2'>
                        <AccordionHeader id="third-co">
                          United International University
                          <span className="fw-medium text-primary ms-auto fs-14">2021 - 2022</span>
                        </AccordionHeader>
                        <AccordionBody>
                          <p className="text-muted mb-1">- Developed Laravel and React.js applications for research projects, improving system performance, database efficiency, and ensuring reliable server operations.</p>
                          <span className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-13 text-uppercase mt-2">Laravel</span>&nbsp;
                          <span className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-13 text-uppercase mt-2">React.js</span>&nbsp;
                          <span className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-13 text-uppercase mt-2">Python</span>
                        </AccordionBody>
                      </AccordionItem>
                      <AccordionItem eventKey='3'>
                        <AccordionHeader id="first-co">
                          Bangladesh Digital Education Research Ltd
                          <span className="fw-medium text-primary ms-auto fs-14">2021</span>
                        </AccordionHeader>
                        <AccordionBody>
                          <p className="text-muted mb-1">- Contributed to Node.js and React.js applications by debugging, implementing improvements, and collaborating with the team to enhance code quality and system stability.</p>
                          <span className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-13 text-uppercase mt-2">React.js</span>&nbsp;
                          <span className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-13 text-uppercase mt-2">Javascript</span>&nbsp;
                          <span className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-13 text-uppercase mt-2">MongoDB</span>
                        </AccordionBody>
                      </AccordionItem>
                    </Accordion>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default LifeTime