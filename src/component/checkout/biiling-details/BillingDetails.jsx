import React from "react";
import './BillingDetails.scss'
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function BillingDetails(){

    return (
        <section className="billing_details_container">
            <span className="billing_details_heading">Billing details</span>
            <Formik
                initialValues={{
                    first_name: '',
                    last_name: '',
                    email: '' ,
                    company_name: '',
                    country : 'Select your country',
                    street_address: '',
                    town: '',
                    province: 'Select your province',
                    zip_code: '',
                    phone: '',
                    additional_info: '',
                    payment_method: ''
                }}
                validate={values => {
                    const errors = {};
                  
                    if (!values.first_name) 
                      errors.first_name = 'First name is required';
                  
                    if (!values.last_name)
                      errors.last_name = 'Last name is required';
                  
                    if (!values.town)
                      errors.town = 'Your town is required';
                  
                    if (!values.street_address)
                      errors.street_address = 'Your street address is required';
                  
                    if (!values.zip_code)
                      errors.zip_code = 'Your area zip code is required';
                  
                    if (!values.phone)
                      errors.phone = 'Phone number is required'; // you wrote errors.Phone (capital P)
                  
                    if (values.province === 'Select your province')
                        errors.province = 'Please select your province';
                    
                    if (values.country === 'Select your country')
                        errors.country = 'Please select your country';
                    
                    if (!values.email) {
                      errors.email = 'Email is required';
                    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
                      errors.email = 'Invalid email format';
                    }
                  
                    if (!values.payment_method) {
                      errors.payment_method = 'Please select a payment method';
                    }
                  
                    return errors;
                }}
                  onSubmit={(values, { setSubmitting }) => {
                    console.log('Form Data:', values);
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting }) => (
                    <Form className="order_and_customer_info">
                        <div className="customer_info">
                            <div className="name">
                                <div>
                                    <label htmlFor="first_name">First Name</label>
                                    <Field type="text" name="first_name"  />
                                    <ErrorMessage name="first_name" component="div" style={{ color: 'red' }} />
                                </div>
                                
                                <div>
                                    <label htmlFor="last_name">Last Name</label>
                                    <Field type="text" name="last_name" />
                                    <ErrorMessage name="last_name" component="div" style={{ color: 'red' }} />
                                </div>
                            </div>

                            <label htmlFor="company_name">Company Name (Optional)</label>
                            <div>
                                <Field type="text" name="company_name" />
                            </div>

                            <label htmlFor="country">Country</label>
                            <div>
                                <Field as="select" name="country">
                                    <option value="default">Select your country</option>
                                    <option value="pk">Pakistan</option>
                                    <option value="sl">Sri Lanka</option>
                                    <option value="us">United States</option>
                                    <option value="ca">Canada</option>
                                </Field>
                                <ErrorMessage name="country" component="div" style={{ color: 'red' }} />
                            </div>

                            <label htmlFor="street_address">Street Address</label>
                            <div>
                                <Field type="text" name="street_address" />
                                <ErrorMessage name="street_address" component="div" style={{ color: 'red' }} />
                            </div>

                            <label htmlFor="town">Town / City</label>
                            <div>
                                <Field type="text" name="town" />
                                <ErrorMessage name="town" component="div" style={{ color: 'red' }} />
                            </div>

                            <label htmlFor="province">Province</label>
                            <div>
                                <Field as="select" name="province">
                                    <option value="default">Select your province</option>
                                    <option value="sindh">Sindh</option>
                                    <option value="punj">Punjab</option>
                                    <option value="kash">Kashmir</option>
                                    <option value="pakh">Pakhtunkhawa</option>
                                </Field>
                                <ErrorMessage name="province" component="div" style={{ color: 'red' }} />
                            </div>
                            

                            <label htmlFor="zip_code">Zip Code</label>
                            <div>
                                <Field type="number" name="zip_code" />
                                <ErrorMessage name="zip_code" component="div" style={{ color: 'red' }} />
                            </div>

                            <label htmlFor="phone">Phone</label>
                            <div>
                                <Field type="number" name="phone" />
                                <ErrorMessage name="phone" component="div" style={{ color: 'red' }} />
                            </div>

                            <label htmlFor="email">Email</label>
                            <div className="email">
                                <Field type="email" name="email" />
                                <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
                            </div>

                            <div>
                                <Field style={{marginTop: '1rem'}} type="text" name="additional_info" placeholder="Additional Information" />
                            </div>
                        </div>

                        <div className="order_info">
                            <div className="total_amount_info">
                                <div>
                                    <span>Product</span>
                                    <span>Subtotal</span>
                                </div>
                                <div>
                                    <div>
                                        <span>Asgaard</span>
                                        <span>x 1</span>
                                    </div>
                                    <span>Rs 250,000.00</span>
                                </div>
                                <div>
                                    <span>Subtotal</span>
                                    <span>Rs 250,000.00</span>
                                </div>
                                <div>
                                    <span>Total</span>
                                    <span>Rs 250,000.00</span>
                                </div>
                            </div>

                            <hr style={{backgroundColor: '##9F9F9F'}}/>

                            <div className="payment_info">
                                <div>
                                    {/* <label>
                                        <Field type="radio" name="gender" value="male" />
                                        Direct bank Transfer
                                    </label> */}

                                    <p>
                                    Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                                    </p>

                                    <div>
                                        <label>
                                            <Field type="radio" name="payment_method" value="bank_transfer" />
                                            Direct bank Transfer
                                        </label>
                                        <label>
                                            <Field type="radio" name="payment_method" value="cash_on_deliver" />
                                            Cash on Delivery
                                        </label>
                                        <ErrorMessage name="payment_method" component="div" style={{ color: "red" }} />
                                    </div>        
                                
                                    <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <b>privacy policy.</b></p>
                                </div>
                            </div>

                            <div>
                                <button type="submit" disabled={isSubmitting}>
                                    Place Order
                                </button>
                            </div>

                                
                        </div>
                    </Form>
                )}
            </Formik>            
        </section>
    )
}