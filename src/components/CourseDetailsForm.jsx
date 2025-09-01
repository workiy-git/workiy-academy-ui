import React, { useState, useRef } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  IconButton,
  Divider,
  MenuItem,
} from "@mui/material";
import { Add, Delete } from "@mui/icons-material";

const sectionTypes = ["bullets", "modules"];

const CourseDetailsForm = ({ onFormDataChange, initialData }) => {
  const [formData, setFormData] = useState({
    path: "",
    data: {
      hero: {
        title: "",
        caption: "",
        cta: "",
        image: "",
      },
      badges: [""],
      sections: [
        {
          title: "",
          type: "bullets",
          items: [""],
        },
      ],
      highlights: [""],
    },
  });

  // Only set form data from initialData when switching courses (by id or path)
  const prevKeyRef = useRef();
  React.useEffect(() => {
    const key = initialData?.id || initialData?.path;
    if (initialData && prevKeyRef.current !== key) {
      setFormData(initialData);
      prevKeyRef.current = key;
    }
  }, [initialData]);

  // Handle input change for hero and path
  const handleHeroChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      data: {
        ...formData.data,
        hero: { ...formData.data.hero, [name]: value },
      },
    });
  };

  // Handle badges, highlights, and section items change
  const handleArrayChange = (arrayName, index, value) => {
    const updatedArray = [...formData.data[arrayName]];
    updatedArray[index] = value;
    setFormData({
      ...formData,
      data: { ...formData.data, [arrayName]: updatedArray },
    });
  };

  // Add a new badge, highlight, or section
  const handleAddField = (arrayName) => {
    const updatedArray = [...formData.data[arrayName]];
    updatedArray.push(arrayName === "sections" ? { title: "", type: "bullets", items: [""] } : "");
    setFormData({
      ...formData,
      data: { ...formData.data, [arrayName]: updatedArray },
    });
  };

  // Remove a badge, highlight, or section
  const handleRemoveField = (arrayName, index) => {
    const updatedArray = [...formData.data[arrayName]];
    updatedArray.splice(index, 1);
    setFormData({
      ...formData,
      data: { ...formData.data, [arrayName]: updatedArray },
    });
  };

  // Handle section title, type, and items
  const handleSectionChange = (index, field, value) => {
    const updatedSections = [...formData.data.sections];
    updatedSections[index][field] = value;
    setFormData({
      ...formData,
      data: { ...formData.data, sections: updatedSections },
    });
  };

  const handleSectionItemChange = (sectionIndex, itemIndex, value) => {
    const updatedSections = [...formData.data.sections];
    updatedSections[sectionIndex].items[itemIndex] = value;
    setFormData({
      ...formData,
      data: { ...formData.data, sections: updatedSections },
    });
  };

  const handleAddSectionItem = (sectionIndex) => {
    const updatedSections = [...formData.data.sections];
    updatedSections[sectionIndex].items.push("");
    setFormData({
      ...formData,
      data: { ...formData.data, sections: updatedSections },
    });
  };

  const handleRemoveSectionItem = (sectionIndex, itemIndex) => {
    const updatedSections = [...formData.data.sections];
    updatedSections[sectionIndex].items.splice(itemIndex, 1);
    setFormData({
      ...formData,
      data: { ...formData.data, sections: updatedSections },
    });
  };

  // Notify parent on every change
  React.useEffect(() => {
    if (onFormDataChange) {
      onFormDataChange(formData);
    }
  }, [formData, onFormDataChange]);

  return (
    <Box sx={{ p: 3, borderRadius: 3, backgroundColor: "#fff", boxShadow: 3 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Course Details Form
      </Typography>

      {/* Course Path */}
      <TextField
        label="Course Path"
        name="path"
        id="course-path"
        value={formData.path}
        onChange={(e) => setFormData({ ...formData, path: e.target.value })}
        fullWidth
        sx={{ mb: 2 }}
      />

      <Divider sx={{ my: 2 }} />
      <Typography variant="h6">Hero Section</Typography>

      <Stack spacing={2} sx={{ mb: 3 }}>
        <TextField
          label="Title"
          name="title"
          id="hero-title"
          value={formData.data.hero.title}
          onChange={handleHeroChange}
          fullWidth
        />
        <TextField
          label="Caption"
          name="caption"
          id="hero-caption"
          value={formData.data.hero.caption}
          onChange={handleHeroChange}
          fullWidth
          multiline
          rows={3}
        />
        <TextField
          label="CTA"
          name="cta"
          id="hero-cta"
          value={formData.data.hero.cta}
          onChange={handleHeroChange}
          fullWidth
        />
        <TextField
          label="Image URL"
          name="image"
          id="hero-image"
          value={formData.data.hero.image}
          onChange={handleHeroChange}
          fullWidth
        />
      </Stack>

      {/* Badges */}
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6">Badges</Typography>
      {formData.data.badges.map((badge, index) => (
        <Stack direction="row" spacing={1} key={index} sx={{ mb: 1 }}>
          <TextField
            value={badge}
            name={`badge-${index}`}
            id={`badge-${index}`}
            onChange={(e) => handleArrayChange("badges", index, e.target.value)}
            fullWidth
          />
          <IconButton onClick={() => handleRemoveField("badges", index)} color="error">
            <Delete />
          </IconButton>
        </Stack>
      ))}
      <Button
        startIcon={<Add />}
        onClick={() => handleAddField("badges")}
        variant="outlined"
        sx={{ mb: 3 }}
      >
        Add Badge
      </Button>

      {/* Sections */}
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6">Sections</Typography>
      {formData.data.sections.map((section, index) => (
        <Box key={index} sx={{ mb: 3, p: 2, border: "1px solid #ddd", borderRadius: 2 }}>
          <TextField
            label="Section Title"
            name={`section-title-${index}`}
            id={`section-title-${index}`}
            value={section.title}
            onChange={(e) => handleSectionChange(index, "title", e.target.value)}
            fullWidth
            sx={{ mb: 2 }}
          />

          <TextField
            select
            label="Section Type"
            name={`section-type-${index}`}
            id={`section-type-${index}`}
            value={section.type}
            onChange={(e) => handleSectionChange(index, "type", e.target.value)}
            fullWidth
            sx={{ mb: 2 }}
          >
            {sectionTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </TextField>

          {/* Section Items */}
          {section.items.map((item, itemIndex) => (
            <Stack direction="row" spacing={1} key={itemIndex} sx={{ mb: 1 }}>
              <TextField
                value={item}
                name={`section-item-${index}-${itemIndex}`}
                id={`section-item-${index}-${itemIndex}`}
                onChange={(e) => handleSectionItemChange(index, itemIndex, e.target.value)}
                fullWidth
              />
              <IconButton onClick={() => handleRemoveSectionItem(index, itemIndex)} color="error">
                <Delete />
              </IconButton>
            </Stack>
          ))}

          <Button
            startIcon={<Add />}
            onClick={() => handleAddSectionItem(index)}
            variant="outlined"
            size="small"
          >
            Add Item
          </Button>

          <Button
            startIcon={<Delete />}
            onClick={() => handleRemoveField("sections", index)}
            color="error"
            size="small"
            sx={{ ml: 2 }}
          >
            Remove Section
          </Button>
        </Box>
      ))}

      <Button
        startIcon={<Add />}
        onClick={() => handleAddField("sections")}
        variant="contained"
        sx={{ mb: 3 }}
      >
        Add Section
      </Button>

      {/* Highlights */}
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6">Highlights</Typography>
      {formData.data.highlights.map((highlight, index) => (
        <Stack direction="row" spacing={1} key={index} sx={{ mb: 1 }}>
          <TextField
            value={highlight}
            name={`highlight-${index}`}
            id={`highlight-${index}`}
            onChange={(e) => handleArrayChange("highlights", index, e.target.value)}
            fullWidth
          />
          <IconButton onClick={() => handleRemoveField("highlights", index)} color="error">
            <Delete />
          </IconButton>
        </Stack>
      ))}
      <Button
        startIcon={<Add />}
        onClick={() => handleAddField("highlights")}
        variant="outlined"
        sx={{ mb: 3 }}
      >
        Add Highlight
      </Button>

  {/* Submit Button removed for single save in Admin */}
    </Box>
  );
};

export default CourseDetailsForm;
