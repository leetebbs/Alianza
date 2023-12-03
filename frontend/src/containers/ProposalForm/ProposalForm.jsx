import React from 'react';
import './ProposalForm.css';
import { useState } from 'react';

const ProposalForm = () => {
  const [formData, setFormData] = useState({
    project_title: '',
    project_id: '',
    project_description: '',
    project_Info: '',
    constr_company: '',
    project_status: '',
    project_benefit: '',
    project_cost: '',
    project_env_impact: '',
    project_progress: '',
    project_support: '',
    project_rejection: '',
    project_location: '',
    project_image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const InputForm = ({ htmlForLabel, textLabel, typeInput, idInput, nameInput, valueInput, onChangeInput, isTextArea }) => {
    const InputComponent = isTextArea ? 'textarea' : 'input';

    return (
      <div className='inputForm'>
        <label className='inputForm_label' htmlFor={htmlForLabel}>
          {textLabel}
        </label>
        <InputComponent
          type={typeInput}
          id={idInput}
          name={nameInput}
          value={valueInput}
          onChange={onChangeInput}
          required
        />
      </div>
    );
  };

  return (
    <div className='webapp__proposalForm section__margin'>
      <h1 className='webapp__proposalForm-title'>Create a Proposal</h1>
      <form className='webapp__proposalForm-form' onSubmit={handleSubmit}>
            <div className='webapp__proposalForm-form_input'>
            {/* <div className='webapp__proposalForm-section1'> */}
            {/* Project Title */}
            <InputForm
            htmlForLabel={`Project_title`}
            textLabel={`Project Title:`}
            typeInput={`text`}
            idInput={`project_title`}
            nameInput={`project_title`}
            valueInput={formData.project_title}
            onChangeInput={handleChange}
            />
            {/* Project ID */}
            <InputForm
            htmlForLabel={`project_id`}
            textLabel={`Project ID:`}
            typeInput={`number`}
            idInput={`project_id`}
            nameInput={`project_id`}
            valueInput={formData.project_id}
            onChangeInput={handleChange}
            />
            {/* Project Description */}
            <InputForm
            htmlForLabel={`project_description`}
            textLabel={`Project Description:`}
            isTextArea={true}
            idInput={`project_description`}
            nameInput={`project_description`}
            valueInput={formData.project_description}
            onChangeInput={handleChange}
            />
            {/* Other input fields */}
            {/* Project Info */}
            <InputForm
            htmlForLabel={`project_Info`}
            textLabel={`Project Info:`}
            typeInput={`text`}
            idInput={`project_Info`}
            nameInput={`project_Info`}
            valueInput={formData.project_Info}
            onChangeInput={handleChange}
            />
            {/* Construction Company */}
            <InputForm
            htmlForLabel={`constr_company`}
            textLabel={`Construction Company:`}
            typeInput={`text`}
            idInput={`constr_company`}
            nameInput={`constr_company`}
            valueInput={formData.constr_company}
            onChangeInput={handleChange}
            />
            
            
            {/* Project Status */}
            <InputForm
            htmlForLabel={`project_status`}
            textLabel={`Project Status:`}
            typeInput={`text`}
            idInput={`project_status`}
            nameInput={`project_status`}
            valueInput={formData.project_status}
            onChangeInput={handleChange}
            />
            {/* </div> */}
            {/* <div className='webapp__proposalForm-section2'> */}
            {/* Project Benefit */}
            <InputForm
            htmlForLabel={`project_benefit`}
            textLabel={`Project Benefit:`}
            typeInput={`text`}
            idInput={`project_benefit`}
            nameInput={`project_benefit`}
            valueInput={formData.project_benefit}
            onChangeInput={handleChange}
            />
            {/* Project Cost */}
            <InputForm
            htmlForLabel={`project_cost`}
            textLabel={`Project Cost:`}
            typeInput={`number`}
            idInput={`project_cost`}
            nameInput={`project_cost`}
            valueInput={formData.project_cost}
            onChangeInput={handleChange}
            />
            {/* Project Environmental Impact */}
            <InputForm
            htmlForLabel={`project_env_impact`}
            textLabel={`Project Environmental Impact:`}
            typeInput={`text`}
            idInput={`project_env_impact`}
            nameInput={`project_env_impact`}
            valueInput={formData.project_env_impact}
            onChangeInput={handleChange}
            />
            {/* Project Progress */}
            <InputForm
            htmlForLabel={`project_progress`}
            textLabel={`Project Progress:`}
            typeInput={`number`}
            idInput={`project_progress`}
            nameInput={`project_progress`}
            valueInput={formData.project_progress}
            onChangeInput={handleChange}
            />
            {/* Project Support */}
            <InputForm
            htmlForLabel={`project_support`}
            textLabel={`Project Support:`}
            typeInput={`number`}
            idInput={`project_support`}
            nameInput={`project_support`}
            valueInput={formData.project_support}
            onChangeInput={handleChange}
            />
            {/* Project Rejection */}
            <InputForm
            htmlForLabel={`project_rejection`}
            textLabel={`Project Rejection:`}
            typeInput={`number`}
            idInput={`project_rejection`}
            nameInput={`project_rejection`}
            valueInput={formData.project_rejection}
            onChangeInput={handleChange}
            />
            {/* Project Location */}
            <InputForm
            htmlForLabel={`project_location`}
            textLabel={`Project Location:`}
            typeInput={`text`}
            idInput={`project_location`}
            nameInput={`project_location`}
            valueInput={formData.project_location}
            onChangeInput={handleChange}
            />
            {/* Project Image */}
            <InputForm
            htmlForLabel={`project_image`}
            textLabel={`Project Image URL:`}
            typeInput={`file`}
            idInput={`project_image`}
            nameInput={`project_image`}
            valueInput={formData.project_image}
            onChangeInput={handleChange}
            />
            {/* </div> */}
            
            {/* Submit Button */}
            <div className='webapp__proposalForm-btn'>
            <button type="submit">Submit Proposal</button>
            </div>
            </div>
      </form>
    </div>
  );
};

export default ProposalForm;
